package com.vladooha.controller;

import com.vladooha.data.entities.LoginInfo;
import com.vladooha.data.entities.ProfileInfo;
import com.vladooha.data.repositories.LoginInfoRepo;
import com.vladooha.data.repositories.ProfileInfoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Map;

@Controller
public class ProfileController {
    @Autowired
    private ProfileInfoRepo profileInfoRepo;
    @Autowired
    private LoginInfoRepo loginInfoRepo;

    @GetMapping("/profile")
    public String get(Map<String, Object> model) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = (User) authentication.getPrincipal();
        String username = user.getUsername();

        ProfileInfo profileInfo = profileInfoRepo.findByUsername(username);
        if (profileInfo != null) {
            model.put("name", profileInfo.getName());
            model.put("surname", profileInfo.getSurname());
            model.put("tnumber", profileInfo.getTnumber());
        } else {
            model.put("name", "-");
            model.put("surname", "-");
            model.put("tnumber", "-");
        }

        LoginInfo loginInfo = loginInfoRepo.findByUsername(username);
        if (loginInfo != null) {
            model.put("email", loginInfo.getEmail());
        } else {
            model.put("email", "-");
        }

        return "profile";
    }
}
