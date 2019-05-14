package com.vladooha.controller;

import com.vladooha.data.entities.courses.*;
import com.vladooha.data.form.FeedbackForm;
import com.vladooha.data.repositories.ProfileInfoRepo;
import com.vladooha.service.CourseService;
import com.vladooha.service.RatingService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.beans.FeatureDescriptor;
import java.security.Principal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

@Controller
public class CoursePassController {
    private static final Logger logger = LogManager.getLogger(CoursePassController.class);

    private static final String DELIMITER = "\\|\\}\\|\\{ona\\|";

    public static final long END_OF_LIST = -1L;

    @Autowired
    private CourseService courseService;
    @Autowired
    private RatingService ratingService;
    @Autowired
    private ProfileInfoRepo profileInfoRepo;

    /// GET
    @GetMapping("/course/{course_id}")
    public String getCourse(@PathVariable("course_id") long course_id,
                            @RequestParam(value = "page_num", defaultValue = "0") int page_num,
                            Map<String, Object> model,
                            Principal principal) {
        //model.put("categories", courseService.getCategories());
        logger.debug("/course/{course_id}");
        logger.debug("Course id - " + course_id);
        logger.debug("Page num - " + page_num);

        CoursePage coursePage = courseService.getCoursePageByNumIfAllowed(principal.getName(), course_id, page_num);

        if (coursePage != null) {
            Course course = courseService.getCourse(course_id);

            List<CoursePage> pageList = new ArrayList<>(courseService.getCoursePages(course_id));
            logger.debug("Page count - " + pageList.size());
            Collections.sort(pageList, (p1, p2) -> Integer.compare(p1.getNum(), p2.getNum()));

            List<String> pageNameList = new ArrayList<>();
            for (CoursePage page : pageList) {
                if (page.getPageType().equals(CourseService.TEXT_PAGE)) {
                    CourseTextPage courseTextPage = (CourseTextPage) courseService.getCastablePage(page.getId());
                    pageNameList.add(courseTextPage.getTitle());
                }

                if (page.getPageType().equals(CourseService.TEST_PAGE)) {
                    CourseTestPage courseTestPage = (CourseTestPage) courseService.getCastablePage(page.getId());
                    pageNameList.add(courseTestPage.getTitle());
                }
            }

            model.put("pages", pageNameList);
            model.put("page_num", coursePage.getNum());
            model.put("course_id", course.getId());
            model.put("course_name", course.getName());

            CourseProgress courseProgress = courseService.getCourseProgress(principal.getName(), course);
            if (course.getTime() > 0L) {
                if (courseProgress != null) {
                    model.put("time", course.getTime() - (System.currentTimeMillis() - courseProgress.getBeginTime()));
                }
            }

            if (coursePage.getId() != -1L) {
                if (coursePage.getPageType().equals(CourseService.TEXT_PAGE)) {
                    CourseTextPage courseTextPage = (CourseTextPage) courseService.getCastablePage(coursePage.getId());

                    model.put("title", courseTextPage.getTitle());
                    model.put("text", courseTextPage.getText());

                    return "/course/course_page_theory";
                }

                if (coursePage.getPageType().equals(CourseService.TEST_PAGE)) {
                    CourseTestPage courseTestPage = (CourseTestPage) courseService.getCastablePage(coursePage.getId());

                    model.put("title", courseTestPage.getTitle());
                    model.put("question", courseTestPage.getQuestion());
                    if (courseProgress.getMissedAnswers().contains(courseTestPage)) {
                        model.put("failed", true);
                    }

                    if (courseTestPage.getType().equals(CourseService.TEST_TEXT_PAGE)) {
                        return "/course/course_page_test_write_answers";
                    }

                    String allAns = courseTestPage.getAns();
                    allAns = allAns.replace(" ", "&nbsp;");
                    model.put("answers", allAns.split(DELIMITER));

                    if (courseTestPage.getType().equals(CourseService.TEST_CHECKBOX_PAGE)) {
                        return "/course/course_page_checkbox";
                    }

                    if (courseTestPage.getType().equals(CourseService.TEST_RADIO_PAGE)) {
                        return "/course/course_page_radio";
                    }
                }
            } else {
                Integer totalScore = courseService.getCourseScore(principal.getName(), course_id);

                if (totalScore != null) {
                    model.put("username", principal.getName());
                    model.put("score", totalScore.intValue());
                    model.put("score_max", course.getScore());

                    return "/course/course_ending";
                }
            }
        }


        // TODO: Return error
        return "";
    }

    @GetMapping("/course/{course_id}/rate")
    public String rateCourseGet(@PathVariable("course_id") long course_id,
                             Map<String, Object> model) {
        FeedbackForm feedbackForm = new FeedbackForm();

        model.put("course_id", course_id);
        model.put("feedbackForm", feedbackForm);
        model.put("complexity", feedbackForm.getComplexity());

        return "/course/course_rating";
    }

    /// POST
    @PostMapping("/course/{course_id}/rate")
    public String rateCoursePost(@PathVariable("course_id") long course_id,
                             @Valid @ModelAttribute("feedbackForm")FeedbackForm feedbackForm,
                             BindingResult bindingResult,
                             Map<String, Object> model,
                             Principal principal) {
        logger.debug("/course/{course_id}/rate");
        logger.debug("Complexity: " + feedbackForm.getComplexity());
        logger.debug("Any errors: " + bindingResult.hasErrors());
        logger.debug("Right answers percent - " + feedbackForm.getRightAnsPercent());

        if (bindingResult.hasErrors()) {
            model.put("course_id", course_id);
            model.put("feedbackForm", feedbackForm);

            return "/course/course_rating";
        }

        ratingService.addRating(feedbackForm, course_id, principal.getName());

        return "redirect:/course/course_rate_ending";
    }

    /// AJAX
    @GetMapping("/ajax/course_check_result/")
    @ResponseBody
    public String checkResult(
            @RequestParam long course_id,
            @RequestParam int page_num,
            @RequestParam String ans,
            Principal principal
    ) {
        logger.debug("ajax: course_next_page");
        logger.debug("Course id - " + course_id);
        logger.debug("Page id - " + page_num);
        logger.debug("Answer - " + ans);

        String ansFixed = ans.replace((char) 160, ' ');

        if (courseService.checkAnswer(principal.getName(), course_id, page_num, ansFixed)) {
            logger.debug("Answer is OK");

            return "OK";
        } else {
            logger.debug("Answer is BAD");

            return "BAD";
        }
    }
}
