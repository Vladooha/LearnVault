package com.vladooha.service;

import com.vladooha.data.entities.ProfileInfo;
import com.vladooha.data.entities.courses.*;
import com.vladooha.data.repositories.ProfileInfoRepo;
import com.vladooha.data.repositories.courses.*;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.*;
import java.util.*;

@Service
@Transactional
public class CourseService {
    private static final Logger logger = LogManager.getLogger(CourseService.class);

    public static final String TEXT_PAGE = "text";
    public static final String TEST_PAGE = "test";
    public static final String TEST_TEXT_PAGE = "text";
    public static final String TEST_RADIO_PAGE = "radio";
    public static final String TEST_CHECKBOX_PAGE = "checkbox";

    private static final String DELIMITER = "\\|\\}\\|\\{ona\\|";

    public static final long END_OF_LIST = -1L;

    private Object mutex = new Object();

    @Autowired
    private CourseRepo courseRepo;
    @Autowired
    private CourseCategoryRepo courseCategoryRepo;
    @Autowired
    private CourseTagRepo courseTagRepo;
    @Autowired
    private CoursePageRepo coursePageRepo;
    @Autowired
    private CourseTextPageRepo courseTextPageRepo;
    @Autowired
    private CourseTestPageRepo courseTestPageRepo;
    @Autowired
    private CourseProgressRepo courseProgressRepo;
    @Autowired
    private TeacherRepo teacherRepo;
    @Autowired
    private ProfileInfoRepo profileInfoRepo;
    @Autowired
    private FeedbackRepo feedbackRepo;
    @Autowired
    private MetatagRepo metatagRepo;

    @PersistenceUnit
    private EntityManagerFactory entityManagerFactory;

    public List<CourseCategory> getCategories() {
        return courseCategoryRepo.findAll();
    }

    @Nullable
    public Course getCourse(long id) {
        return courseRepo.getOne(id);
    }

    @Nullable
    public List<CoursePage> getCoursePages(long id) {
        return coursePageRepo.findAllByCourse(courseRepo.getOne(id));
    }

    public boolean isTeacher(String username) {
        return teacherRepo.findByUsername(username) != null;
    }

    @Nullable
    public Long createCourse(int category_num,
                             String author,
                             String name,
                             String description,
                             String[] tags,
                             boolean isPrivate,
                             long time,
                             String pic) {
        CourseCategory courseCategory = courseCategoryRepo.findByNum(category_num);
        if (courseCategory != null) {

            Course course = new Course();
            course.setAuthor(author);
            course.setCategory(courseCategory);
            course.setName(name);
            course.setDescription(description);
            course.setTime(time);
            course.setPic(pic);

            Set<CourseTag> tagSet = new HashSet<>();
            for (String tagName : tags) {
                CourseTag courseTag = courseTagRepo.findByName(tagName);

                if (courseTag == null) {
                    courseTag = new CourseTag();
                    courseTag.setName(tagName);
                    courseTagRepo.save(courseTag);
                }

                tagSet.add(courseTag);
            }
            course.setTags(tagSet);

            String specialization = getSpecialization(tagSet);
            if (specialization != null) {
                course.setSpecialization(specialization);
            }

            if (teacherRepo.findByUsername(author) != null) {
                course.setPrivate(isPrivate);
            } else {
                course.setPrivate(false);
            }

            courseRepo.save(course);

            Feedback feedback = new Feedback();
            feedback.setCourse(course);

            feedbackRepo.save(feedback);

            return course.getId();
        } else {
            return -1L;
        }
    }

    @Nullable
    public Long[] setCourseStruct(long id, List<String> types) {
        Optional<Course> optional = courseRepo.findById(id);

        if (optional.isPresent()) {
            Course course = optional.get();

            List<CoursePage> oldCoursePages = getCoursePages(course.getId());
            for (CoursePage coursePage : oldCoursePages) {
                coursePageRepo.delete(coursePage);
            }

            List<CoursePage> coursePages = new LinkedList<>();
            for (int i = 0; i < types.size(); ++i) {
                String type = types.get(i);

                CoursePage coursePage = new CoursePage();
                if (type.equals(TEXT_PAGE)) {
                    CourseTextPage courseTextPage = new CourseTextPage();
                    //courseTextPageRepo.save(courseTextPage);
                    coursePage = courseTextPage;
                } else if (type.equals(TEST_PAGE)) {
                    CourseTestPage courseTestPage = new CourseTestPage();
                    //courseTestPageRepo.save(courseTestPage);
                    coursePage = courseTestPage;
                } else {
                    coursePages.add(null);

                    continue;
                }

                coursePage.setCourse(course);
                coursePage.setNum(i);
                coursePageRepo.save(coursePage);

                int alreadyReg = coursePages.size();

                if (alreadyReg == 0 || i == 0) {
                    coursePage.setPrevPageId(-1L);
                    course.setFirstPageId(coursePage.getId());
                } else {
                    coursePage.setPrevPageId(coursePages.get(alreadyReg - 1).getId());
                    coursePages.get(alreadyReg - 1).setNextPageId(coursePage.getId());
                }

                if (i == types.size() - 1) {
                    coursePage.setNextPageId(-1L);
                    coursePageRepo.save(coursePage);
                }

                logger.debug("id - " + coursePage.getId());
                logger.debug("Prev - " + coursePage.getPrevPageId());
                logger.debug("Next - " + coursePage.getNextPageId());
                logger.debug("Num - " + coursePage.getNum());

                coursePages.add(coursePage);
            }

            course.setPages(coursePages);
            course.setPageCount(types.size());
            courseRepo.save(course);

            logger.debug("Pages count - " + course.getPages().size());
            logger.debug("Pages count new - " + courseRepo.getOne(course.getId()).getPages().size());

            Long[] result = new Long[types.size()];
            int i = 0;
            for (CoursePage coursePage : coursePages) {
                if (coursePage == null) {
                    result[i++] = -1L;
                } else {
                    result[i++] = coursePage.getId();
                }
            }

            return result;
        } else {
            return null;
        }
    }

    public String fillTextPage(long course_id,
                               long page_id,
                               String title,
                               String text) {
        Optional<CourseTextPage> courseTextPageQuery = courseTextPageRepo.findById(page_id);
        if (courseTextPageQuery.isPresent()) {
            CourseTextPage courseTextPage = courseTextPageQuery.get();
            if (courseTextPage.getCourse().getId() == course_id) {
                courseTextPage.setTitle(title);
                courseTextPage.setText(text);

                courseTextPageRepo.save(courseTextPage);

                return "OK";
            }
        }

        return "";
    }

    @Transactional(isolation = Isolation.SERIALIZABLE)
    public String fillTestPage(long course_id,
                               long page_id,
                               String title,
                               String question,
                               int score,
                               String ans,
                               String rightAns,
                               String type,
                               boolean isRepeatable) {
        Optional<CourseTestPage> courseTestPageQuery = courseTestPageRepo.findById(page_id);
        if (courseTestPageQuery.isPresent()) {
            synchronized (CourseService.class) {
                CourseTestPage courseTestPage = courseTestPageQuery.get();
                EntityManager entityManager = entityManagerFactory.createEntityManager();
                entityManager.getTransaction().begin();
                Course course = entityManager.getReference(Course.class, new Long(courseTestPage.getCourse().getId()));
                entityManager.refresh(course, LockModeType.PESSIMISTIC_WRITE);

                logger.debug("Old course score: " + course.getScore());

                if (course.getId() == course_id) {
                    courseTestPage.setTitle(title);
                    courseTestPage.setQuestion(question);
                    courseTestPage.setScore(score);
                    courseTestPage.setAns(ans);
                    courseTestPage.setRightAns(rightAns);
                    courseTestPage.setType(type);
                    courseTestPage.setRepeatable(isRepeatable);

                    course.setScore(course.getScore() + score);

                    courseTestPageRepo.save(courseTestPage);
                    entityManager.merge(course);

                    Course course1 = entityManager.find(Course.class, new Long(course.getId()));

                    logger.debug("New course score: " + course1.getScore());

                    entityManager.getTransaction().commit();

                    Course course2 = entityManager.find(Course.class, new Long(course.getId()));

                    logger.debug("New course score after commit: " + course2.getScore());

                    return "OK";
                }

                entityManager.getTransaction().commit();
            }
        }

        return "";
    }

    public boolean checkAnswer(String username, long course_id, int pageNum, String ans) {
        logger.debug("Answer checking...");

        boolean answer = false;
        int scores = 0;

        Course course = courseRepo.getOne(course_id);
        if (course != null) {
            CoursePage coursePage = getCoursePageByNum(course, pageNum);
            if (coursePage != null) {
                ProfileInfo profileInfo = profileInfoRepo.findByUsername(username);
                if (profileInfo != null) {
                    CourseProgress courseProgress = courseProgressRepo.findByUserAndCourse(profileInfo, course);

                    if (coursePage.getPageType().equals(TEXT_PAGE)) {
                        answer = true;
                    }

                    if (coursePage.getPageType().equals(TEST_PAGE)) {
                        CourseTestPage courseTestPage = courseTestPageRepo.getOne(coursePage.getId());

                        if (!courseProgress.getMissedAnswers().contains(courseTestPage)) {
                            String[] allAnswers = courseTestPage.getAns().split(DELIMITER);
                            String[] allRequestAnswers = ans.split(DELIMITER);

                            String rightAnsNumsInRequest = "";
                            String rightAnsNums = courseTestPage.getRightAns();
                            for (int i = 0; i < allAnswers.length; ++i) {
                                for (int j = 0; j < allRequestAnswers.length; ++j) {
                                    if (rightAnsNums.contains(Integer.toString(i + 1))) {
                                        String currAns = allAnswers[i];

                                        if (allRequestAnswers[j].compareToIgnoreCase(currAns) == 0) {
                                            rightAnsNumsInRequest += (i + 1);

                                            if (rightAnsNumsInRequest.length() == rightAnsNums.length() &&
                                                    rightAnsNums.length() == allRequestAnswers.length ||
                                                    courseTestPage.getType().equals(TEST_TEXT_PAGE)) {
                                                answer = true;
                                                scores = courseTestPage.getScore();

                                                break;
                                            }
                                        }
                                    }
                                }
                            }

                            if (!answer && !courseTestPage.isRepeatable()) {
                                courseProgress.getMissedAnswers().add(courseTestPage);
                            }

                            logger.debug("right - " + rightAnsNums);
                            logger.debug("right in request - " + rightAnsNumsInRequest);
                        }
                    }

                    if (courseProgress != null) {
                        logger.debug("Course progress already exists! Current page - " + courseProgress.getCurrPage());

                        if (courseProgress.getCurrPage() == pageNum && answer) {
                            courseProgress.setCurrPage(courseProgress.getCurrPage() + 1);
                            courseProgress.setCurrScore(courseProgress.getCurrScore() + scores);
                        }
                    } else {
                        logger.debug("First time passing course");

                        courseProgress = new CourseProgress();
                        courseProgress.setUser(profileInfo);
                        courseProgress.setCourse(course);
                        courseProgress.setBeginTime(System.currentTimeMillis());

                        if (answer) {
                            logger.debug("Answer is correct");

                            courseProgress.setCurrPage(1);
                            if (coursePage.getPageType().equals(TEST_PAGE)) {
                                CourseTestPage courseTestPage = courseTestPageRepo.getOne(coursePage.getId());
                                courseProgress.setCurrScore(courseTestPage.getScore());
                            } else {
                                courseProgress.setCurrScore(0);
                            }
                        } else {
                            courseProgress.setCurrPage(0);
                            courseProgress.setCurrScore(0);
                        }
                    }

                    logger.debug("Profile info - " + profileInfo.getUsername());
                    logger.debug("Course progress - " + courseProgress.getCurrPage());
                    logger.debug("Page num - " + pageNum);
                    logger.debug("Answer - " + answer);

                    courseProgressRepo.save(courseProgress);
                }
            }
        }

        return answer;
    }

    @Nullable
    public CoursePage getCastablePage(long pageId) {
        if (pageId >= END_OF_LIST) {
            CoursePage nextCoursePage = coursePageRepo.getOne(pageId);

            if (nextCoursePage != null) {
                switch (coursePageRepo.pageTypeById(nextCoursePage.getId())) {
                    case TEXT_PAGE:
                        return courseTextPageRepo.getOne(pageId);

                    case TEST_PAGE:
                        return courseTestPageRepo.getOne(pageId);

                        default:
                            return null;
                }
            }
        } else if (pageId == END_OF_LIST) {
            CoursePage nextCoursePage = new CoursePage();
            nextCoursePage.setId(END_OF_LIST);

            return nextCoursePage;
        }

        return null;
    }

    @Nullable
    public List<CoursePage> getCoursePages(Course course) {
        return coursePageRepo.findAllByCourse(course);
    }

    @Nullable
    public CourseProgress getCourseProgress(String username, Course course) {
        ProfileInfo profileInfo = profileInfoRepo.findByUsername(username);

        if (profileInfo != null) {
            return courseProgressRepo.findByUserAndCourse(profileInfo, course);
        }

        return null;
    }

    @Nullable
    public CoursePage getCoursePageByNum(Course course, int pageNum) {
        List<CoursePage> coursePages = getCoursePages(course.getId());
        for (CoursePage coursePage : coursePages) {
            if (coursePage.getNum() == pageNum) {
                return coursePage;
            }
        }

        return null;
    }

    @Nullable
    public CoursePage getCoursePageByNumIfAllowed(String username, long course_id, int pageNum) {
        Course course = courseRepo.getOne(course_id);

        if (course != null) {
            if (pageNum == 0) {
                checkAnswer(username, course_id, pageNum, "");
            }

            ProfileInfo profileInfo = profileInfoRepo.findByUsername(username);

            if (profileInfo != null) {
                CourseProgress courseProgress = courseProgressRepo.findByUserAndCourse(profileInfo, course);

                if (courseProgress != null) {
                    logger.debug("Course progress - " + courseProgress.getCurrPage());
                    logger.debug("Page num - " + pageNum);
                    logger.debug("Pages in course - " + course.getPageCount());
                    logger.debug("Privacy - " + course.isPrivate());

                    long currTime = System.currentTimeMillis();
                    long beginTime = courseProgress.getBeginTime();
                    long allowedTime = course.getTime();
                    if (allowedTime <= 0L || currTime - beginTime < allowedTime) {
                        if (course.isPrivate()) {
                            logger.debug("Accesing to private course");

                            Set<ProfileInfo> students = teacherRepo.findByUsername(course.getAuthor()).getStudents();
                            if (!students.contains(profileInfo)) {
                                return null;
                            } else {
                                logger.debug(profileInfo.getUsername() + " is student!");
                            }
                        }

                        if (course.getPageCount() == pageNum) {
                            CoursePage endCoursePage = new CoursePage();
                            endCoursePage.setId(-1L);
                            courseProgress.setCompleted(true);

                            logger.debug("End of course page returned!");

                            return endCoursePage;
                        }

                        if (pageNum <= course.getPageCount()) {
                            return getCoursePageByNum(course, pageNum);
                        }
                    } else {
                        logger.debug("Time is over!");
                    }
                }
            }
        }

        return null;
    }

    @Nullable
    public Integer getCourseScore(String username, Long course_id) {
        Course course = courseRepo.getOne(course_id);
        ProfileInfo profileInfo = profileInfoRepo.findByUsername(username);

        if (course != null && profileInfo != null) {
            CourseProgress courseProgress = courseProgressRepo.findByUserAndCourse(profileInfo, course);
            if (courseProgress != null) {
                return courseProgress.getCurrScore();
            }
        }

        return null;
    }

    @Nullable
    private String getSpecialization(Set<CourseTag> courseTags) {
        //Map<String, Integer> specScore = new HashMap<>();
        String result = null;
        int maxScore = 1;
        for (Metatag metatag : metatagRepo.findAll()) {
            int score = 0;
            for (MetatagTag metatagTag : metatag.getMetatagTags()) {
                if (courseTags.contains(metatagTag.getTag())) {
                    score += metatagTag.getWeight();
                }
            }

            if (score > maxScore) {
                result = metatag.getName();
                maxScore = score;
            } else if (score == maxScore) {
                if (result == null) {
                    result = metatag.getName();
                } else {
                    result += ", " + metatag.getName();
                }
                maxScore = score;
            }
        }

        return result;
    }
}
