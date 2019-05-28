package com.vladooha.service;

import com.vladooha.data.entities.LoginInfo;
import com.vladooha.data.entities.ProfileInfo;
import com.vladooha.data.entities.Role;
import com.vladooha.data.entities.courses.*;
import com.vladooha.data.form.MetatagCreateForm;
import com.vladooha.data.form.MetatagForm;
import com.vladooha.data.form.StudentForm;
import com.vladooha.data.repositories.LoginInfoRepo;
import com.vladooha.data.repositories.ProfileInfoRepo;
import com.vladooha.data.repositories.courses.*;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.omg.CORBA.NO_PERMISSION;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
public class AdminService {
    private static final Logger logger = LogManager.getLogger(AdminService.class);

    private static final String OK = "OK";
    private static final String NO_PERMISSION = "NO_PERMISSIONS";
    private static final String USER_NOT_FOUND = "USER_NOT_FOUND";
    private static final String ALREADY_EXISTS = "ALREADY_EXISTS";

    @Autowired
    private LoginInfoRepo loginInfoRepo;
    @Autowired
    private ProfileInfoRepo profileInfoRepo;
    @Autowired
    private TeacherRepo teacherRepo;
    @Autowired
    private CourseCategoryRepo courseCategoryRepo;
    @Autowired
    private MetatagRepo metatagRepo;
    @Autowired
    private CourseTagRepo courseTagRepo;
    @Autowired
    private MetatagTagRepo metatagTagRepo;
    @Autowired
    private TeacherService teacherService;

    public String addTeacher(Principal principal, String teacherName) {
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

                    return OK;
                } else {
                    return ALREADY_EXISTS;
                }
            } else {
                return USER_NOT_FOUND;
            }
        } else {
            return NO_PERMISSION;
        }
    }

    public String addStudent(Principal principal, String teacherName, String studentName) {
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

    public String removeStudent(Principal principal, String teacherName, String studentName) {
        if (isAdmin(principal)) {
            return teacherService.removeStudentOperation(teacherName, studentName);
        } else {
            return "NO_PERMISSIONS";
        }
    }

    public String addAdmin(Principal principal, String newAdminName) {
        if (isAdmin(principal)) {
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

    public String addCourseCategory(Principal principal, String categoryName) {
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

    public List<StudentForm> getStudentsByTeacher(Principal principal, String teacherName) {
        if (isAdmin(principal)) {
            return teacherService.getStudentsOperation(teacherName);
        }

        return null;
    }

    public String addMetatag(Principal principal, MetatagCreateForm metatagCreateForm) {
        if (isAdmin(principal)) {
            String name = metatagCreateForm.getMetatagName();
            Metatag metatag = metatagRepo.findByName(name);
            metatag = new Metatag();
            metatag.setName(name);

            metatagRepo.save(metatag);

            return OK;
        }

        return NO_PERMISSION;
    }

    public String addTagToMetatag(Principal principal, MetatagForm metatagForm) {
        if (isAdmin(principal)) {
            Metatag metatag = metatagRepo.findByName(metatagForm.getMetatagName());
            CourseTag courseTag = courseTagRepo.findByName(metatagForm.getTagName());
            if (courseTag == null) {
                courseTag = new CourseTag();
                courseTag.setName(metatagForm.getTagName());

                courseTagRepo.save(courseTag);

                courseTag = courseTagRepo.findByName(courseTag.getName());
            }

            MetatagTag metatagTag = metatagTagRepo.findByMetatagAndTag(metatag, courseTag);
            if (metatagTag == null) {
                metatagTag = new MetatagTag();
            }
            metatagTag.setMetatag(metatag);
            metatagTag.setTag(courseTag);
            metatagTag.setWeight(metatagForm.getWeight());

            metatagTagRepo.save(metatagTag);

            /*
            logger.debug("MetatagTag tag id: " + metatagTag.getTag().getId());

            Set<MetatagTag> metatagSet = metatag.getMetatagTags();
            if (metatagSet.contains(metatagTag)) {
                metatagSet.remove(metatagTag);
            }
            metatagSet.add(metatagTag);

            metatagSet = courseTag.getMetatagTags();
            if (metatagSet.contains(metatagTag)) {
                metatagSet.remove(metatagTag);
            }
            metatagSet.add(metatagTag);

            metatagRepo.save(metatag);
            */

            return OK;
        }

        return NO_PERMISSION;
    }

    public boolean isAdmin(Principal principal) {
        LoginInfo loginInfo = loginInfoRepo.findByUsername(principal.getName());

        if (loginInfo != null) {
            if (loginInfo.getRoles().contains(Role.ADMIN)) {
                return true;
            }
        }

        return false;
    }
}
