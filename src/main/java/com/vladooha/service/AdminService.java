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
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Service;

import javax.persistence.PersistenceUnit;
import java.security.Principal;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

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
    private StudyGroupRepo studyGroupRepo;
    @Autowired
    private TeacherService teacherService;

    public String addTeacher(Principal principal, String teacherName) {
        if (isAdmin(principal)) {
            LoginInfo loginInfo = loginInfoRepo.findByUsername(teacherName);
            if (loginInfo != null) {
                Teacher teacher = teacherRepo.findByUsername(teacherName);
                if (teacher == null) {
                    ProfileInfo teacherProfile = profileInfoRepo.findByUsername(teacherName);
                    if (teacherProfile != null) {
                        teacher = new Teacher();
                        teacher.setProfileInfo(teacherProfile);

                        teacherRepo.save(teacher);

                        Set<Role> roles = loginInfo.getRoles();
                        roles.add(Role.TEACHER);
                        loginInfo.setRoles(roles);

                        loginInfoRepo.save(loginInfo);

                        return OK;
                    }
                }

                return ALREADY_EXISTS;
            } else {
                return USER_NOT_FOUND;
            }
        } else {
            return NO_PERMISSION;
        }
    }

    public String removeTeacher(Principal principal, String teacherName) {
        if (isAdmin(principal)) {
            LoginInfo loginInfo = loginInfoRepo.findByUsername(teacherName);
            if (loginInfo != null) {
                Teacher teacher = teacherRepo.findByUsername(teacherName);
                if (teacher != null) {
                    teacherRepo.delete(teacher);
                }

                Set<Role> roles = loginInfo.getRoles();
                if (roles.contains(Role.TEACHER)) {
                    roles.remove(Role.TEACHER);
                    loginInfo.setRoles(roles);

                    loginInfoRepo.save(loginInfo);
                }

                return OK;
            } else {
                return USER_NOT_FOUND;
            }
        } else {
            return NO_PERMISSION;
        }
    }

    public String addTeacherToGroup(Principal principal, String groupName, String teacherName) {
        if (isAdmin(principal)) {
            Teacher teacher = teacherRepo.findByUsername(teacherName);
            if (teacher != null) {
                StudyGroup studyGroup = teacherService.getGroupIfAllowed(principal, groupName);
                if (studyGroup != null) {
                    studyGroup.getTeachers().add(teacher);

                    studyGroupRepo.save(studyGroup);
                }
            }

            return OK;
        } else {
            return NO_PERMISSION;
        }
    }

    public String removeTeacherFromGroup(Principal principal, String groupName, String teacherName) {
        if (isAdmin(principal)) {
            Teacher teacher = teacherRepo.findByUsername(teacherName);
            if (teacher != null) {
                StudyGroup studyGroup = teacherService.getGroupIfAllowed(principal, groupName);
                if (studyGroup != null) {
                    studyGroup.getTeachers().remove(teacher);

                    studyGroupRepo.save(studyGroup);
                }
            }

            return OK;
        } else {
            return NO_PERMISSION;
        }
    }

    public String addStudent(Principal principal, String groupName, String studentName) {
        if (isAdmin(principal)) {
            StudyGroup studyGroup = studyGroupRepo.findByName(groupName);

            if (studyGroup != null) {
                ProfileInfo profileInfo = profileInfoRepo.findByUsername(studentName);

                if (profileInfo != null) {
                    Set<ProfileInfo> students = studyGroup.getStudents();
                    students.add(profileInfo);

                    studyGroupRepo.save(studyGroup);
                }

                return "OK";
            }

            return "NOT_FOUND";
        } else {
            return "NO_PERMISSION";
        }
    }

    public String removeStudent(Principal principal, String groupName, String studentName) {
        if (isAdmin(principal)) {
            return teacherService.removeStudent(principal, groupName, studentName);
        } else {
            return "NO_PERMISSIONS";
        }
    }

    public String createGroup(String groupName) {
        return teacherService.createGroup(groupName);
    }

    public String deleteGroup(Principal principal, String groupName) {
        return teacherService.deleteGroup(principal, groupName);
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

    public String removeAdmin(Principal principal, String adminName) {
        if (isAdmin(principal)) {
            LoginInfo loginInfo = loginInfoRepo.findByUsername(adminName);

            if (loginInfo != null) {
                Set<Role> roles = loginInfo.getRoles();
                if (roles.contains(Role.ADMIN)) {
                    roles.remove(Role.ADMIN);
                    loginInfo.setRoles(roles);

                    loginInfoRepo.save(loginInfo);
                }

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

    public String removeCourseCategory(Principal principal, String categoryName) {
        if (isAdmin(principal)) {
            CourseCategory courseCategory = courseCategoryRepo.findByName(categoryName);

            if (courseCategory != null) {
                courseCategoryRepo.delete(courseCategory);
            }

            return "OK";
        } else {
            return "NO_PERMISSIONS";
        }
    }

    public List<StudentForm> getStudentsByGroup(Principal principal, String groupName) {
        if (isAdmin(principal)) {
            return teacherService.getStudents(principal, groupName);
        }

        return null;
    }

    public String addMetatag(Principal principal, String metatagName) {
        if (isAdmin(principal)) {
            Metatag metatag = metatagRepo.findByName(metatagName);
            if (metatag == null) {
                metatag = new Metatag();
                metatag.setName(metatagName);

                metatagRepo.save(metatag);
            }

            return OK;
        }

        return NO_PERMISSION;
    }

    public String removeMetatag(Principal principal, String metatagName) {
        if (isAdmin(principal)) {
            Metatag metatag = metatagRepo.findByName(metatagName);

            if (metatag != null) {
                metatagRepo.delete(metatag);
            }

            return OK;
        }

        return NO_PERMISSION;
    }

    public String addTagToMetatag(Principal principal, String metatagName, String tagName, int weight) {
        if (isAdmin(principal)) {
            Metatag metatag = metatagRepo.findByName(metatagName);
            CourseTag courseTag = courseTagRepo.findByName(tagName);
            if (courseTag == null) {
                courseTag = new CourseTag();
                courseTag.setName(tagName);

                courseTagRepo.save(courseTag);

                courseTag = courseTagRepo.findByName(courseTag.getName());
            }

            MetatagTag metatagTag = metatagTagRepo.findByMetatagAndTag(metatag, courseTag);
            if (metatagTag == null) {
                metatagTag = new MetatagTag();
            }
            metatagTag.setMetatag(metatag);
            metatagTag.setTag(courseTag);
            metatagTag.setWeight(weight);

            metatagTagRepo.save(metatagTag);

            return OK;
        }

        return NO_PERMISSION;
    }

    public List<StudyGroup> getAllGroups() {
        return studyGroupRepo.findAll();
    }

    public List<StudyGroup> getAllGroupsByTeacher(String teacherName) {
        Teacher teacher = teacherRepo.findByUsername(teacherName);
        if (teacher != null) {
            List<StudyGroup> result = getAllGroups()
                    .stream()
                    .filter(group -> group.getTeachers().contains(teacher))
                    .collect(Collectors.toList());

            return result;
        }

        return null;
    }

    public List<Teacher> getAllTeachers(Principal principal) {
        if (isAdmin(principal)) {
            return teacherRepo.findAll();
        }

        return null;
    }

    public List<String> getAllAdmins(Principal principal) {
        if (isAdmin(principal)) {
            List<String> adminNames = loginInfoRepo.findByRolesContaining(Role.ADMIN)
                    .stream()
                    .map(a -> a.getUsername())
                    .collect(Collectors.toList());

            return adminNames;
        }

        return null;
    }

    public List<CourseCategory> getAllCategories(Principal principal) {
        if (isAdmin(principal)) {
            return courseCategoryRepo.findAll();
        }

        return null;
    }

    public String changeUsername(Principal principal, String oldName, String newName) {
        if (isAdmin(principal)) {
            LoginInfo loginInfo = loginInfoRepo.findByUsername(oldName);
            ProfileInfo profileInfo = profileInfoRepo.findByUsername(oldName);

            if (loginInfo != null && profileInfo != null) {
                loginInfo.setUsername(newName);
                profileInfo.setUsername(newName);

                loginInfoRepo.save(loginInfo);
                profileInfoRepo.save(profileInfo);
            }

            return "NOT_FOUND";
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
