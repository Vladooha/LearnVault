package com.vladooha.controller;

import com.vladooha.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.security.Principal;

@Controller
public class AdminPanelController {
    @Autowired
    private AdminService adminService;

    @GetMapping("/admin_panel")
    public String adminPanel(Principal principal) {
        String adminName = principal.getName();
        if (adminService.isAdmin(adminName)) {
            return "admin_panel";
        }

        return "";
    }

    @GetMapping("/ajax/add_teacher")
    @ResponseBody
    public String addTeacher(
            @RequestParam String teacherName,
            Principal principal) {
        String adminName = principal.getName();
        String response = adminService.addTeacher(adminName, teacherName);

        return response;
    }

    @GetMapping("/ajax/add_student")
    @ResponseBody
    public String addStudent(
            @RequestParam String teacherName,
            @RequestParam String studentName,
            Principal principal) {
        String adminName = principal.getName();
        String response = adminService.addStudent(adminName, teacherName, studentName);

        return response;
    }

    @GetMapping("/ajax/remove_student")
    @ResponseBody
    public String removeStudent(
            @RequestParam String teacherName,
            @RequestParam String studentName,
            Principal principal) {
        String adminName = principal.getName();
        String response = adminService.removeStudent(adminName, teacherName, studentName);

        return response;
    }

    @GetMapping("/ajax/add_admin")
    @ResponseBody
    public String addAdmin(
            @RequestParam(name = "adminName") String newAdminName,
            Principal principal) {
        String adminName = principal.getName();
        String response = adminService.addAdmin(adminName, newAdminName);

        return response;
    }

    @GetMapping("/ajax/add_course_category")
    @ResponseBody
    public String addCourseCategory(
            @RequestParam String categoryName,
            Principal principal) {
        String adminName = principal.getName();
        String response = adminService.addAdmin(adminName, categoryName);

        return response;
    }
}
