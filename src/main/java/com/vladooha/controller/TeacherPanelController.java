package com.vladooha.controller;

import com.vladooha.data.entities.ProfileInfo;
import com.vladooha.data.entities.courses.StudyGroup;
import com.vladooha.service.AdminService;
import com.vladooha.service.TeacherService;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;

@Controller
public class TeacherPanelController {
    @Autowired
    private TeacherService teacherService;
    @Autowired
    private AdminService adminService;


    @GetMapping("/teacher_panel/students")
    public String adminPanelWithStudents(
            @RequestParam String teacherName,
            Map<String, Object> model,
            Principal principal) {
        if (teacherService.isTeacher(principal)) {
            initModel(model, principal);

            return "admin_panel";
        }

        return "";
    }

    @GetMapping("/ajax/remove_student_by_teacher")
    @ResponseBody
    public String removeStudent(
            @RequestParam String groupName,
            @RequestParam String studentName,
            Principal principal) {
        String response = teacherService.removeStudent(principal, groupName, studentName);

        return response;
    }

    @GetMapping("/ajax/add_student_by_teacher")
    @ResponseBody
    public String addStudent(
            @RequestParam String groupName,
            @RequestParam String studentName,
            Principal principal) {
        String response = teacherService.removeStudent(principal, groupName, studentName);

        return response;
    }

    @GetMapping("/ajax/create_group_by_teacher")
    @ResponseBody
    public String createGroup(
            @RequestParam String groupName,
            Principal principal) {
        String response = teacherService.createGroup(groupName, principal.getName());

        return response;
    }

    @GetMapping("/ajax/delete_group_by_teacher")
    @ResponseBody
    public String deleteGroup(
            @RequestParam String groupName,
            Principal principal) {
        String response = teacherService.deleteGroup(principal, groupName);

        return response;
    }

    private void initModel(Map<String, Object> model, Principal principal) {
        Set<StudyGroup> groups = teacherService.getTeachersGroups(principal.getName());
        model.putIfAbsent("groups", groups);
    }
}
