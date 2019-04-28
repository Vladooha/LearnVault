package com.vladooha.controller;

import com.vladooha.data.entities.courses.*;
import com.vladooha.data.repositories.ProfileInfoRepo;
import com.vladooha.service.CourseService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

@Controller
public class CoursePassController {
    private static final Logger logger = LogManager.getLogger(CoursePassController.class);

    private static final String TEXT_PAGE = "text";
    private static final String TEST_PAGE = "test";
    private static final String TEST_TEXT_PAGE = "text";
    private static final String TEST_RADIO_PAGE = "radio";
    private static final String TEST_CHECKBOX_PAGE = "checkbox";

    private static final String DELIMITER = "\\|\\}\\|\\{ona\\|";

    public static final long END_OF_LIST = -1L;

    @Autowired
    private CourseService courseService;
    @Autowired
    private ProfileInfoRepo profileInfoRepo;

    @GetMapping("/course/{course_id}")
    public String getCourse(@PathVariable("course_id") long course_id,
                            @RequestParam(value = "page_num", defaultValue = "0") int page_num,
                            @RequestParam(value = "ans", defaultValue = "") String ans,
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
                if (page.getPageType().equals(TEXT_PAGE)) {
                    CourseTextPage courseTextPage = (CourseTextPage) courseService.getCastablePage(page.getId());
                    pageNameList.add(courseTextPage.getTitle());
                }

                if (page.getPageType().equals(TEST_PAGE)) {
                    CourseTestPage courseTestPage = (CourseTestPage) courseService.getCastablePage(page.getId());
                    pageNameList.add(courseTestPage.getTitle());
                }
            }

            model.put("pages", pageNameList);
            model.put("page_num", coursePage.getNum());
            model.put("course_id", course.getId());
            model.put("course_name", course.getName());

            if (coursePage.getPageType().equals(TEXT_PAGE)) {
                CourseTextPage courseTextPage = (CourseTextPage) courseService.getCastablePage(coursePage.getId());

                model.put("title", courseTextPage.getTitle());
                model.put("text", courseTextPage.getText());

                return "/course/course_page_theory";
            }

            if (coursePage.getPageType().equals(TEST_PAGE)) {
                CourseTestPage courseTestPage = (CourseTestPage) courseService.getCastablePage(coursePage.getId());
                if (courseTestPage.getType().equals(TEST_TEXT_PAGE)) {
                    model.put("title", courseTestPage.getTitle());
                    model.put("question", courseTestPage.getQuestion());

                    return "/course/course_page_test_write_answers";
                }

                return "";
            }
        }

        // TODO: Return error
        return "";
    }

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

        if (courseService.checkAnswer(principal.getName(), course_id, page_num, ans)) {
            logger.debug("Answer is OK");

            return "OK";
        } else {
            logger.debug("Answer is BAD");

            return "BAD";
        }
    }
}
