package com.vladooha.controller;

import com.vladooha.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.security.Principal;
import java.util.Map;

@Controller
public class TeacherPanelController {
    @Autowired
    private TeacherService teacherService;

    @GetMapping("/teacher_panel/students")
    public String adminPanelWithStudents(
            @RequestParam String teacherName,
            Map<String, Object> model,
            Principal principal) {
        if (teacherService.isTeacher(principal)) {
            model.put("students", teacherService.getStudents(principal, teacherName));

            return "admin_panel";
        }

        return "";
    }

    @GetMapping("/teacher_panel")
    public String adminPanel(Principal principal) {
        if (teacherService.isTeacher(principal)) {
            return "admin_panel";
        }

        return "";
    }

    @GetMapping("/ajax/remove_student_by_teacher")
    @ResponseBody
    public String removeStudent(
            @RequestParam String teacherName,
            @RequestParam String studentName,
            Principal principal) {
        String response = teacherService.removeStudent(principal, teacherName, studentName);

        return response;
    }
}
