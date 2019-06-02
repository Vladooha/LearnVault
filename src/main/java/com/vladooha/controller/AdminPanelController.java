package com.vladooha.controller;

import com.vladooha.data.entities.ProfileInfo;
import com.vladooha.data.entities.courses.StudyGroup;
import com.vladooha.data.form.MetatagCreateForm;
import com.vladooha.data.form.MetatagForm;
import com.vladooha.data.validators.annotations.MetatagExists;
import com.vladooha.data.validators.annotations.MetatagNotExists;
import com.vladooha.service.AdminService;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Min;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Controller
@Validated
public class AdminPanelController {
    @Autowired
    private AdminService adminService;

    @GetMapping("/admin_panel")
    public String adminPanel(
            Map<String, Object> model,
            Principal principal) {
        String adminName = principal.getName();
        if (adminService.isAdmin(principal)) {
            initModel(model, principal);

            return "admin_panel";
        }

        return "";
    }

    @GetMapping("/admin_panel/students")
    public String adminPanelWithStudents(
            @RequestParam String groupName,
            Map<String, Object> model,
            Principal principal) {
        if (adminService.isAdmin(principal)) {
            model.put("students", adminService.getStudentsByGroup(principal, groupName));

            return "admin_panel";
        }

        return "";
    }

    @GetMapping("/ajax/create_group")
    @ResponseBody
    public String createGroup(
            @RequestParam String groupName,
            Principal principal) {
        String response = adminService.createGroup(groupName);

        return response;
    }

    @GetMapping("/ajax/delete_group")
    @ResponseBody
    public String deleteGroup(
            @RequestParam String groupName,
            Principal principal) {
        String response = adminService.deleteGroup(principal, groupName);

        return response;
    }

    @GetMapping("/ajax/add_teacher")
    @ResponseBody
    public String addTeacher(
            @RequestParam String teacherName,
            Principal principal) {
        String response = adminService.addTeacher(principal, teacherName);

        return response;
    }

    @GetMapping("/ajax/remove_teacher")
    @ResponseBody
    public String removeTeacher(
            @RequestParam String teacherName,
            Principal principal) {
        String response = adminService.removeTeacher(principal, teacherName);

        return response;
    }

    @GetMapping("/ajax/add_teacher_to_group")
    @ResponseBody
    public String addTeacher(
            @RequestParam String teacherName,
            @RequestParam String groupName,
            Principal principal) {
        String response = adminService.addTeacherToGroup(principal, groupName, teacherName);

        return response;
    }

    @GetMapping("/ajax/remove_teacher_from_group")
    @ResponseBody
    public String removeTeacher(
            @RequestParam String teacherName,
            @RequestParam String groupName,
            Principal principal) {
        String response = adminService.removeTeacherFromGroup(principal, groupName, teacherName);

        return response;
    }

    @GetMapping("/ajax/add_student")
    @ResponseBody
    public String addStudent(
            @RequestParam String groupName,
            @RequestParam String studentName,
            Principal principal) {
        String response = adminService.addStudent(principal, groupName, studentName);

        return response;
    }

    @GetMapping("/ajax/remove_student")
    @ResponseBody
    public String removeStudent(
            @RequestParam String groupName,
            @RequestParam String studentName,
            Principal principal) {
        String response = adminService.removeStudent(principal, groupName, studentName);

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

    @GetMapping("/ajax/remove_admin")
    @ResponseBody
    public String removeAdmin(
            @RequestParam(name = "adminName") String adminName,
            Principal principal) {
        String response = adminService.removeAdmin(principal, adminName);

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

    @GetMapping("/ajax/remove_course_category")
    @ResponseBody
    public String removeCourseCategory(
            @RequestParam String categoryName,
            Principal principal) {
        String response = adminService.removeCourseCategory(principal, categoryName);

        return response;
    }

    @GetMapping("/ajax/add_metatag")
    public String addMetatag(
            @RequestParam @Valid @MetatagNotExists String metatagName,
            Map<String, Object> model,
            Principal principal) {
        initModel(model, principal);

        adminService.addMetatag(principal, metatagName);

        return "admin_panel";
    }

    @GetMapping("/ajax/remove_metatag")
    public String removeMetatag(
            @RequestParam @Valid @MetatagExists String metatagName,
            Map<String, Object> model,
            Principal principal) {
        initModel(model, principal);

        adminService.removeMetatag(principal, metatagName);

        return "";
    }

    @GetMapping("/ajax/add_tag_to_metatag")
    public String addTagToMetatag(
            @RequestParam @Valid @MetatagExists String metatagName,
            @RequestParam String tagName,
            @RequestParam @Min(value = 0, message = "Вес не может быть отрицательным") int weight,
            Map<String, Object> model,
            Principal principal) {
        initModel(model, principal);

        adminService.addTagToMetatag(principal, metatagName, tagName, weight);

        return "admin_panel";
    }

    @GetMapping("/ajax/change_username")
    public String removeMetatag(
            @RequestParam String oldUsername,
            @RequestParam String newUsername,
            Map<String, Object> model,
            Principal principal) {
        initModel(model, principal);

        adminService.changeUsername(principal, oldUsername, newUsername);

        return "admin_panel";
    }

    private void initModel(Map<String, Object> model, Principal principal) {
        @Getter
        @Setter
        @AllArgsConstructor
        class StudentInfo {
            private String name;
            private String groupName;
        }

        List<StudentInfo> studentInfoList = new ArrayList<>();
        List<StudyGroup> groups = adminService.getAllGroups(principal);
        for (StudyGroup group : groups) {
            for (ProfileInfo student : group.getStudents()) {
                studentInfoList.add(
                        new StudentInfo(
                                student.getName(),
                                group.getName()));
            }
        }

        model.putIfAbsent("groups", groups);
        model.putIfAbsent("students", studentInfoList);
        model.putIfAbsent("admins", adminService.getAllAdmins(principal));
        model.putIfAbsent("teachers", adminService.getAllTeachers(principal));
        model.putIfAbsent("categories", adminService.getAllCategories(principal));
    }
}
