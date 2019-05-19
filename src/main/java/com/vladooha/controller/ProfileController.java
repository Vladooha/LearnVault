package com.vladooha.controller;

import com.vladooha.data.entities.ProfileInfo;
import com.vladooha.data.repositories.ProfileInfoRepo;
import com.vladooha.service.UserService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.security.Principal;
import java.util.Map;

@Controller
public class ProfileController {
    private static final Logger logger = LogManager.getLogger(ProfileController.class);

    @Autowired
    private UserService userService;

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

        logger.debug("User with id=" + id + " found: " + profileInfo == null);

        if (profileInfo != null) {
            logger.debug("Username: " + profileInfo.getUsername());

            model.put("profile", profileInfo);

            return "profile";
        } else {
            // TODO Error page
            return "";
        }
    }
}
