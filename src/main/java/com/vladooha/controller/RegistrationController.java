package com.vladooha.controller;

import com.vladooha.data.entities.LoginInfo;
import com.vladooha.data.entities.ProfileInfo;
import com.vladooha.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;

@Controller
public class RegistrationController {
    private static final Logger logger = LoggerFactory.getLogger(RegistrationController.class);

    @Autowired
    private UserService userService;

    @GetMapping("/ajax/reg_username")
    public @ResponseBody
    String checkUsername(
            @RequestParam String username) {

        return userService.checkUsername(username) ? "true" : "";
    }

    @GetMapping("/ajax/reg_email")
    public @ResponseBody
    String checkEmail(
            @RequestParam String email) {

        return userService.checkEmail(email) ? "true" : "";
    }

    @GetMapping("/reg")
    public String returnPage(Map<String, Object> model) {
        return "reg";
    }

    @PostMapping("/reg")
    public String addUser(
            @RequestParam(name = "username") String username,
            @RequestParam(name = "email") String email,
            @RequestParam(name = "pass") String pass,

            @RequestParam(name = "name", required = false, defaultValue = "") String name,
            @RequestParam(name = "surname", required = false, defaultValue = "") String surname,
            @RequestParam(name = "date", required = false, defaultValue = "") String date,
            @RequestParam(name = "tnumber", required = false, defaultValue = "") String tnumber,

            Map<String, Object> model) {

        logger.debug(
                "New registration request:\n" +
                "Username - " + username + "\n" +
                "Email - " + email + "\n" +
                "Password - " + pass);

        LoginInfo loginInfo = userService.createUser(username, email, pass);
        // null if registration data isn't valid
        if (loginInfo != null) {
            logger.debug("Registration done");

            ProfileInfo profileInfo = userService.updateProfile(username, name, surname, date, tnumber);
            logger.debug("Profile info saved");

            return "login";
        } else {
            logger.debug("Registration failed");

            return "reg";
        }
    }
}
