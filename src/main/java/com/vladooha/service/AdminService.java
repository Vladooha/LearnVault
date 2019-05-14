package com.vladooha.service;

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
import org.springframework.stereotype.Service;

import javax.validation.constraints.NotNull;
import java.security.Principal;
import java.util.List;
import java.util.Set;

@Service
public class AdminService {
    @Autowired
    private LoginInfoRepo loginInfoRepo;
    @Autowired
    private ProfileInfoRepo profileInfoRepo;
    @Autowired
    private TeacherRepo teacherRepo;
    @Autowired
    private CourseCategoryRepo courseCategoryRepo;

    public String addTeacher(String adminName, String teacherName) {
        if (isAdmin(adminName)) {
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

    public String addStudent(String adminName, String teacherName, String studentName) {
        if (isAdmin(adminName)) {
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

    public String removeStudent(String adminName, String teacherName, String studentName) {
        if (isAdmin(adminName)) {
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

    public String addAdmin(String adminName, String newAdminName) {
        if (isAdmin(adminName)) {
            LoginInfo loginInfo = loginInfoRepo.findByUsername(newAdminName);

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

    public String addCourseCategory(String adminName, String categoryName) {
        if (isAdmin(adminName)) {
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

    public boolean isAdmin(String username) {
        LoginInfo loginInfo = loginInfoRepo.findByUsername(username);

        if (loginInfo != null) {
            if (loginInfo.getRoles().contains(Role.ADMIN)) {
                return true;
            }
        }

        return false;
    }
}
