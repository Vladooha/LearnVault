package com.vladooha.controller;

import com.vladooha.data.entities.courses.Course;
import com.vladooha.data.repositories.courses.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class IndexController {
    @Autowired
    private CourseRepo courseRepo;

    @GetMapping({"/", "/index"})
    public String getMainPage(Model model) {
        Page<Course> lastCourses = courseRepo
                .findAll(
                        PageRequest.of(
                                0,
                                10,
                                Sort.by(
                                        Sort.Direction.DESC, "id")));
        if (lastCourses != null) {
            model.addAttribute("lastCourses", lastCourses.getContent());
        }

        return "index";
    }
}
