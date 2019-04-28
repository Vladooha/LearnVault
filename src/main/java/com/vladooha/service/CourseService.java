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

import javax.persistence.EntityManager;
import java.util.*;

@Service
public class CourseService {
    private static final Logger logger = LogManager.getLogger(CourseService.class);

    private static final String TEXT_PAGE = "text";
    private static final String TEST_PAGE = "test";

    private static final String DELIMITER = "\\|\\}\\|\\{ona\\|";

    public static final long END_OF_LIST = -1L;

    @Autowired
    CourseRepo courseRepo;
    @Autowired
    CourseCategoryRepo courseCategoryRepo;
    @Autowired
    CourseTagRepo courseTagRepo;
    @Autowired
    CoursePageRepo coursePageRepo;
    @Autowired
    CourseTextPageRepo courseTextPageRepo;
    @Autowired
    CourseTestPageRepo courseTestPageRepo;
    @Autowired
    CourseProgressRepo courseProgressRepo;

    @Autowired
    ProfileInfoRepo profileInfoRepo;

    @Autowired
    EntityManager entityManager;

    @Value("${courses.path}")
    private String coursePath;

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

    @Nullable
    public Long createCourse(int category_num,
                               String name,
                               String description,
                               String[] tags,
                               boolean isPrivate) {
        CourseCategory courseCategory = courseCategoryRepo.findByNum(category_num);
        if (courseCategory != null) {

            Course course = new Course();
            course.setCategory(courseCategory);
            course.setName(name);
            course.setDescription(description);

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

            course.setPrivate(isPrivate);
            courseRepo.save(course);

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

    public String fillTestPage(long course_id,
                               long page_id,
                               String title,
                               String question,
                               int score,
                               String ans,
                               String rightAns,
                               String type) {
        Optional<CourseTestPage> courseTestPageQuery = courseTestPageRepo.findById(page_id);
        if (courseTestPageQuery.isPresent()) {
            CourseTestPage courseTestPage = courseTestPageQuery.get();
            if (courseTestPage.getCourse().getId() == course_id) {
                courseTestPage.setTitle(title);
                courseTestPage.setQuestion(question);
                courseTestPage.setScore(score);
                courseTestPage.setAns(ans);
                courseTestPage.setRightAns(rightAns);
                courseTestPage.setType(type);

                courseTestPageRepo.save(courseTestPage);

                return "OK";
            }
        }

        return "";
    }

    @Nullable
    public CoursePage verifyPage(long course_id,
                              long page_id) {
        Optional<Course> courseQuery = courseRepo.findById(course_id);

        if (courseQuery.isPresent()) {
            Course course = courseQuery.get();
            Optional<CourseTestPage> pageQuery = courseTestPageRepo.findById(page_id);

            if (pageQuery.isPresent()) {
                CourseTestPage coursePage = pageQuery.get();

                if (course.getPages().contains(coursePage)) {
                    return coursePage;
                }
            }
        }

        return null;
    }

//    public Long checkAnswer(CoursePage coursePage, String ans) {
//        Long nextPageId = null;
//
//        if (coursePageRepo.pageTypeById(coursePage.getId()).equals(TEXT_PAGE)) {
//            nextPageId = coursePage.getNextPageId();
//        } else if (coursePageRepo.pageTypeById(coursePage.getId()).equals(TEST_PAGE)) {
//            Optional<CourseTestPage> courseTestPageQuery = courseTestPageRepo.findById(coursePage.getId());
//            if (courseTestPageQuery.isPresent()) {
//                CourseTestPage courseTestPage = courseTestPageQuery.get();
//
//                if (courseTestPage != null) {
//                    for (String rightAns : courseTestPage.getRightAns().split(DELIMITER)) {
//                        if (ans.compareToIgnoreCase(rightAns) == 0) {
//                            nextPageId = courseTestPage.getNextPageId();
//
//                            break;
//                        }
//                    }
//                }
//            }
//        }
//
//        return nextPageId;
//    }

    public boolean checkAnswer(String username, long course_id, int pageNum, String ans) {
        Course course = courseRepo.getOne(course_id);
        if (course != null) {
            CoursePage coursePage = getCoursePageByNum(course, pageNum);
            if (coursePage != null) {
                boolean answer = false;

                if (coursePage.getPageType().equals(TEXT_PAGE)) {
                    answer = true;
                }

                if (coursePage.getPageType().equals(TEST_PAGE)) {
                    CourseTestPage courseTestPage = courseTestPageRepo.getOne(coursePage.getId());
                    String[] allAnswers = courseTestPage.getAns().split(DELIMITER);

                    for (int i = 0; i < allAnswers.length; ++i) {
                        String currAns = allAnswers[i];
                        logger.debug("Comparing '" + ans + "' and '" + currAns + "'");
                        if (ans.compareToIgnoreCase(currAns) == 0 &&
                                courseTestPage.getRightAns().contains(Integer.toString(i + 1))) {
                            answer = true;

                            break;
                        }
                    }
                }

                ProfileInfo profileInfo = profileInfoRepo.findByUsername(username);
                if (profileInfo != null) {
                    logger.debug("Profile info - " + profileInfo.getUsername());

                    CourseProgress courseProgress = courseProgressRepo.findByUserAndCourse(profileInfo, course);
                    logger.debug("Course progress - " + courseProgress.getCurrPage());
                    logger.debug("Page num - " + pageNum);
                    logger.debug("Answer - " + answer);
                    if (courseProgress != null && courseProgress.getCurrPage() == pageNum && answer) {
                        courseProgress.setCurrPage(courseProgress.getCurrPage() + 1);
                    }
                    logger.debug("Course progress after - " + courseProgress.getCurrPage());
                    courseProgressRepo.save(courseProgress);
                }

                return answer;
            }
        }

        return false;
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
    public CourseProgress getCourseProgress(ProfileInfo user, Course course) {
        return courseProgressRepo.findByUserAndCourse(user, course);
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
                return coursePageRepo.getOne(course.getFirstPageId());
            }

            ProfileInfo profileInfo = profileInfoRepo.findByUsername(username);

            if (profileInfo != null){
                CourseProgress courseProgress = courseProgressRepo.findByUserAndCourse(profileInfo, course);
                logger.debug("Course progress - " + courseProgress.getCurrPage());
                logger.debug("Page num - " + pageNum);
                if (courseProgress != null && pageNum <= courseProgress.getCurrPage()) {
                     return getCoursePageByNum(course, pageNum);
                }
            }
        }

        return null;
    }

//    @Nullable
//    public CoursePage getCoursePageByNum(long course_id, int page_num, String username, String answer) {
//        Course course = getCourse(course_id);
//        if (course != null) {
//            ProfileInfo profileInfo = profileInfoRepo.findByUsername(username);
//            if (profileInfo != null) {
//                CourseProgress courseProgress = getCourseProgress(profileInfo, course);
//
//                if (page_num == 0) {
//                    if (courseProgress == null) {
//                        courseProgress = new CourseProgress();
//                        courseProgress.setCourse(course);
//                        courseProgress.setUser(profileInfo);
//                        courseProgress.setCurrScore(0);
//                        courseProgress.setCurrPage(0);
//
//                        courseProgressRepo.save(courseProgress);
//                    }
//
//                    return getCastablePage(course.getFirstPageId());
//                } else if (page_num > 0) {
//                    if (courseProgress != null) {
////                        CoursePage coursePage =  getCastablePage(course.getFirstPageId());
////
////                        for (int i = 0; i < page_num; ++i) {
////                            if (coursePage.getNextPageId() != END_OF_LIST) {
////                                coursePage = getCastablePage(coursePage.getNextPageId());
////                            } else {
////                                return null;
////                            }
////                        }
//
//                        CoursePage coursePage = coursePageRepo.findByCourseAndNum(course, page_num);
//                        if (coursePage != null) {
//                            int currPageNum = courseProgress.getCurrPage();
//
//                            if (currPageNum >= page_num) {
//                                return coursePage;
//                            }
//
//                            if (currPageNum + 1 == page_num) {
//                                Long nextPageId = checkAnswer(coursePage, answer);
//
//                                if (nextPageId != null) {
//                                    if (nextPageId == END_OF_LIST) {
//                                        CourseTextPage courseTextPage = new CourseTextPage();
//                                        courseTextPage.setTitle("Вы завершили курс '" + course.getName() + "'!");
//                                        courseTextPage.setText("Поздравляем!");
//
//                                        return courseTextPage;
//                                    } else {
//                                        if (coursePage.getPageType().equals(TEST_PAGE)) {
//                                            CourseTestPage courseTestPage = courseTestPageRepo.getOne(coursePage.getId());
//                                            int currScore = courseProgress.getCurrScore();
//                                            courseProgress.setCurrScore(currScore + courseTestPage.getScore());
//                                        }
//                                        courseProgress.setCurrPage(currPageNum + 1);
//
//                                        return coursePage;
//                                    }
//                                }
//                            }
//                        }
//                    }
//                }
//            }
//        }
//
//        return null;
//    }
}
