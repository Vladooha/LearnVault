package com.vladooha.controller;

import com.vladooha.data.entities.courses.Course;
import com.vladooha.data.entities.courses.CourseTag;
import com.vladooha.data.repositories.courses.CourseRepo;
import com.vladooha.data.repositories.courses.CourseTagRepo;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.*;

@Controller
public class SearchController {
    private static final Logger logger = LogManager.getLogger(SearchController.class);

    @Autowired
    private CourseRepo courseRepo;
    @Autowired
    private CourseTagRepo courseTagRepo;

    @GetMapping("/search")
    public String searchCourse(
            @RequestParam(defaultValue = "Введите запрос") String request,
            Map<String, Object> model) {
        String[] keywords = request.split("\\s");

        Set<Course> results = new LinkedHashSet<>();
        for (String keyword : keywords) {
            List<Course> courseList = courseRepo.findByNameContaining(keyword);
            if (courseList != null) {
                results.addAll(courseList);
            }
        }

        for (String keyword : keywords) {
            CourseTag courseTag = courseTagRepo.findByName(keyword);
            List<Course> courseList = courseRepo.findByTags(courseTag);
            if (courseList != null) {
                results.addAll(courseList);
            }
        }

        for (String keyword : keywords) {
            List<Course> courseList = courseRepo.findByDescriptionContaining(keyword);
            if (courseList != null) {
                results.addAll(courseList);
            }
        }

        model.put("courses", results);

//        StringBuilder result = new StringBuilder();
//        result.append("<html><head/><body>");
//        result.append("Search results:");
//        result.append("<br>");
//        for (Course course : results) {
//            result.append(course.getName());
//            result.append("<br>");
//            result.append(course.getDescription());
//            result.append("Tags:");
//            result.append("<br>");
//            for (CourseTag tag : course.getTags()) {
//                result.append(tag.getName());
//                result.append("<br>");
//            }
//            result.append("----------");
//            result.append("<br>");
//        }
//        result.append("</body></html>");

        return "search";
    }

}
