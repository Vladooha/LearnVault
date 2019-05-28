package com.vladooha.controller;
import com.vladooha.service.CourseService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Controller
public class CourseConstructController {
    private static final Logger logger = LogManager.getLogger(CourseConstructController.class);

    @Autowired
    private CourseService courseService;

    /// Simple requests
    @GetMapping("/constructor/course_create")
    public String getCourseConstructor(
            Map<String, Object> model,
            Principal principal) {
        model.put("categories", courseService.getCategories());
        model.put("isTeacher", courseService.isTeacher(principal.getName()));

        return "/constructor/course_create";
    }

    /// AJAX
    @GetMapping("/ajax/course_create")
    public @ResponseBody
    String create(
            @RequestParam int categoryNum,
            @RequestParam String name,
            @RequestParam String description,
            @RequestParam String[] tags,
            @RequestParam boolean isPrivate,
            @RequestParam long time,
            @RequestParam String pic,
            Principal principal
    ) {
        logger.debug("ajax: course_create");
        logger.debug("Category number - " + categoryNum);
        logger.debug("Name - " + name);
        logger.debug("Description - " + description);
        logger.debug("Time - " + time);
        logger.debug("isPrivate - " + isPrivate);

        Long course_id = courseService.createCourse(categoryNum,
                principal.getName(),
                name,
                description,
                tags,
                isPrivate,
                time,
                pic);

        if (course_id != -1L) {
            return String.valueOf(course_id);
        } else {
            return "";
        }
    }

    @GetMapping("/ajax/course_struct")
    public @ResponseBody
    String setStruct(
            @RequestParam long course_id,
            @RequestParam String type_list
    ) {
        logger.debug("ajax: course_struct");
        logger.debug("Id - " + course_id);
        logger.debug("Types - " + type_list);

        String[] types = type_list.split("\\,");
        List<String> typeList = new ArrayList<>();


        logger.debug("Types:");
        for (String type : types) {
            logger.debug(type);
            typeList.add(type);
        }

        try {
            Long[] pageIds = courseService.setCourseStruct(course_id, typeList);

            StringBuilder idString = new StringBuilder();
            for (Long pageId : pageIds) {
                idString.append(pageId);
                idString.append(",");
            }
            idString.replace(idString.length() - 1, idString.length(), "");

            return idString.toString();
        } catch (Exception e) {
            logger.error("ajax: course_struct error: ", e);

            return "";
        }
    }

    @GetMapping("/ajax/course_page_text")
    public @ResponseBody
    String setTextPage(
            @RequestParam long course_id,
            @RequestParam long page_id,
            @RequestParam String title,
            @RequestParam String text
    ) {
        logger.debug("ajax: course_page_text");
        logger.debug("Course id - " + course_id);
        logger.debug("Page id - " + page_id);
        logger.debug("Title - " + title);
        logger.debug("Text - " + text);

        return courseService.fillTextPage(course_id, page_id, title, text);
    }

    @GetMapping("/ajax/course_page_test")
    public @ResponseBody
    String setTestPage(
            @RequestParam long course_id,
            @RequestParam int page_id,
            @RequestParam String title,
            @RequestParam String question,
            @RequestParam int score,
            @RequestParam String ans,
            @RequestParam String rightAns,
            @RequestParam String type,
            @RequestParam(name="again") boolean isRepeatable
    ) {
        logger.debug("ajax: course_page_test");
        logger.debug("Course id - " + course_id);
        logger.debug("Page id - " + page_id);
        logger.debug("Title - " + title);
        logger.debug("Question - " + question);
        logger.debug("Answers - " + ans);
        logger.debug("Right answers - " + rightAns);
        logger.debug("isRepeatable - " + isRepeatable);

        return courseService.fillTestPage(course_id, page_id, title, question, score, ans, rightAns, type, isRepeatable);
    }

    // TODO: Return a new page
}
