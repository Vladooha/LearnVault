package com.vladooha.controller;

import com.vladooha.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.security.Principal;
import java.util.Map;

@Controller
public class AdminPanelController {
    @Autowired
    private AdminService adminService;

    @GetMapping("/admin_panel/students")
    public String adminPanelWithStudents(
            @RequestParam String teacherName,
            Map<String, Object> model,
            Principal principal) {
        if (adminService.isAdmin(principal)) {
            model.put("students", adminService.getStudentsByTeacher(principal, teacherName));

            return "admin_panel";
        }

        return "";
    }

    @GetMapping("/admin_panel")
    public String adminPanel(Principal principal) {
        String adminName = principal.getName();
        if (adminService.isAdmin(principal)) {
            return "admin_panel";
        }

        return "";
    }

    @GetMapping("/ajax/add_teacher")
    @ResponseBody
    public String addTeacher(
            @RequestParam String teacherName,
            Principal principal) {
        String response = adminService.addTeacher(principal, teacherName);

        return response;
    }

    @GetMapping("/ajax/add_student")
    @ResponseBody
    public String addStudent(
            @RequestParam String teacherName,
            @RequestParam String studentName,
            Principal principal) {
        String response = adminService.addStudent(principal, teacherName, studentName);

        return response;
    }

    @GetMapping("/ajax/remove_student")
    @ResponseBody
    public String removeStudent(
            @RequestParam String teacherName,
            @RequestParam String studentName,
            Principal principal) {
        String response = adminService.removeStudent(principal, teacherName, studentName);

        return response;
    }

    @GetMapping("/ajax/add_admin")
    @ResponseBody
    public String addAdmin(
            @RequestParam(name = "adminName") String newAdminName,
            Principal principal) {
        String response = adminService.addAdmin(principal, newAdminName);

        return response;
    }

    @GetMapping("/ajax/add_course_category")
    @ResponseBody
    public String addCourseCategory(
            @RequestParam String categoryName,
            Principal principal) {
        String response = adminService.addCourseCategory(principal, categoryName);

        return response;
    }
}
