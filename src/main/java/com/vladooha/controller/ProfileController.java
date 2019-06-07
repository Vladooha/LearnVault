package com.vladooha.controller;

import com.vladooha.data.entities.ProfileInfo;
import com.vladooha.data.entities.courses.Course;
import com.vladooha.data.entities.courses.CourseProgress;
import com.vladooha.data.repositories.ProfileInfoRepo;
import com.vladooha.data.repositories.courses.CourseProgressRepo;
import com.vladooha.data.repositories.courses.CourseRepo;
import com.vladooha.service.UserService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.security.Principal;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Controller
public class ProfileController {
    private static final Logger logger = LogManager.getLogger(ProfileController.class);

    @Autowired
    private UserService userService;
    @Autowired
    private CourseRepo courseRepo;
    @Autowired
    private CourseProgressRepo courseProgressRepo;

    @GetMapping("/profile")
    public String get(
            @RequestParam(defaultValue = "-1") Long id,
            Map<String, Object> model,
            Principal principal) {
        ProfileInfo profileInfo;
        if (id == -1L) {
            profileInfo = userService.getProfileByUsername(principal.getName());
        } else {
            profileInfo = userService.getProfileById(id);
        }

        if (profileInfo != null) {
            String username = profileInfo.getUsername();
            logger.debug("Username: " + username);

            model.put("profile", profileInfo);
            model.put("createdCourses", courseRepo.findByAuthor(username));
            model.put("courseProgresses",courseProgressRepo.findByUser(profileInfo));

            return "profile";
        } else {
            // TODO Error page
            return "";
        }
    }

//    @GetMapping(value = "/ajax/get_courses_created", produces = "application/json; charset=UTF-8")
//    @ResponseBody
//    public List<Course> getCreatedCourses(
//            @RequestParam String username
//    ) {
//        courseRepo.findByAuthor(username);
//    }
}
