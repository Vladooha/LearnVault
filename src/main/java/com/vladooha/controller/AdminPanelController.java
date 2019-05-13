package com.vladooha.controller;

import com.vladooha.data.entities.LoginInfo;
import com.vladooha.data.entities.ProfileInfo;
import com.vladooha.data.entities.Role;
import com.vladooha.data.entities.courses.CourseCategory;
import com.vladooha.data.entities.courses.Teacher;
import com.vladooha.data.repositories.LoginInfoRepo;
import com.vladooha.data.repositories.ProfileInfoRepo;
import com.vladooha.data.repositories.courses.CourseCategoryRepo;
import com.vladooha.data.repositories.courses.TeacherRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.security.Principal;
import java.util.List;
import java.util.Set;

@Controller
public class AdminPanelController {
    @Autowired
    private LoginInfoRepo loginInfoRepo;
    @Autowired
    private ProfileInfoRepo profileInfoRepo;
    @Autowired
    private TeacherRepo teacherRepo;
    @Autowired
    private CourseCategoryRepo courseCategoryRepo;

    @GetMapping("/admin_panel")
    public String adminPanel(Principal principal) {
        if (isAdmin(principal)) {
            return "admin_panel";
        }

        return "";
    }

    @GetMapping("/ajax/add_teacher")
    @ResponseBody
    public String addTeacher(
            @RequestParam String teacherName,
            Principal principal) {
        if (isAdmin(principal)) {
            ProfileInfo teacherProfileInfo = profileInfoRepo.findByUsername(teacherName);

            if (teacherProfileInfo != null) {
                if (teacherRepo.findByUsername(teacherName) == null) {
                    Teacher teacher = new Teacher();
                    teacher.setUsername(teacherName);

                    teacherRepo.save(teacher);

                    LoginInfo loginInfo = loginInfoRepo.findByUsername(teacherName);
                    if (loginInfo != null) {
                        Set<Role> roles = loginInfo.getRoles();
                        roles.add(Role.TEACHER);
                        loginInfo.setRoles(roles);

                        loginInfoRepo.save(loginInfo);
                    }

                    return "OK";
                } else {
                    return "ALREADY_REG";
                }
            } else {
                return "USER_NOT_FOUND";
            }
        } else {
            return "NO_PERMISSIONS";
        }
    }

    @GetMapping("/ajax/add_student")
    @ResponseBody
    public String addStudent(
            @RequestParam String teacherName,
            @RequestParam String studentName,
            Principal principal) {
        if (isAdmin(principal)) {
            Teacher teacher = teacherRepo.findByUsername(teacherName);

            if (teacher != null) {
                ProfileInfo studentProfileInfo = profileInfoRepo.findByUsername(studentName);

                if (studentProfileInfo != null) {
                    Set<ProfileInfo> students = teacher.getStudents();
                    students.add(studentProfileInfo);
                    teacher.setStudents(students);
                }

                teacherRepo.save(teacher);

                return "OK";
            } else {
                return "USER_NOT_FOUND";
            }
        } else {
            return "NO_PERMISSIONS";
        }
    }

    @GetMapping("/ajax/remove_student")
    @ResponseBody
    public String removeStudent(
            @RequestParam String teacherName,
            @RequestParam String studentName,
            Principal principal) {
        if (isAdmin(principal)) {
            Teacher teacher = teacherRepo.findByUsername(teacherName);

            if (teacher != null) {
                ProfileInfo studentProfileInfo = profileInfoRepo.findByUsername(studentName);

                if (studentProfileInfo != null) {
                    Set<ProfileInfo> students = teacher.getStudents();
                    students.remove(studentProfileInfo);
                    teacher.setStudents(students);
                }

                teacherRepo.save(teacher);

                return "OK";
            } else {
                return "USER_NOT_FOUND";
            }
        } else {
            return "NO_PERMISSIONS";
        }
    }

    @GetMapping("/ajax/add_admin")
    @ResponseBody
    public String addAdmin(
            @RequestParam String adminName,
            Principal principal) {
        if (isAdmin(principal)) {
            LoginInfo loginInfo = loginInfoRepo.findByUsername(adminName);

            if (loginInfo != null) {
                Set<Role> roles = loginInfo.getRoles();
                roles.add(Role.ADMIN);
                loginInfo.setRoles(roles);

                loginInfoRepo.save(loginInfo);

                return "OK";
            } else {
                return "USER_NOT_FOUND";
            }
        } else {
            return "NO_PERMISSIONS";
        }
    }

    @GetMapping("/ajax/add_course_category")
    @ResponseBody
    public String addCourseCategory(
            @RequestParam String categoryName,
            Principal principal) {
        if (isAdmin(principal)) {
            List<CourseCategory> courseCategoryList = courseCategoryRepo.findAll();
            CourseCategory courseCategory = courseCategoryRepo.findByName(categoryName);

            if (courseCategory == null) {
                CourseCategory newCourseCategory = new CourseCategory();
                newCourseCategory.setName(categoryName);
                newCourseCategory.setNum(courseCategoryList.size() + 1);

                courseCategoryRepo.save(newCourseCategory);

                return "OK";
            } else {
                return "ALREADY_REG";
            }
        } else {
            return "NO_PERMISSIONS";
        }
    }

    private boolean isAdmin(Principal principal) {
        LoginInfo loginInfo = loginInfoRepo.findByUsername(principal.getName());

        if (loginInfo != null) {
            if (loginInfo.getRoles().contains(Role.ADMIN)) {
                return true;
            }
        }

        return false;
    }
}
