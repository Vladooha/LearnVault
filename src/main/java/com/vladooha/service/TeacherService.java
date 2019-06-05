package com.vladooha.service;

import com.vladooha.data.entities.LoginInfo;
import com.vladooha.data.entities.ProfileInfo;
import com.vladooha.data.entities.Role;
import com.vladooha.data.entities.courses.StudyGroup;
import com.vladooha.data.entities.courses.Teacher;
import com.vladooha.data.form.StudentForm;
import com.vladooha.data.repositories.LoginInfoRepo;
import com.vladooha.data.repositories.ProfileInfoRepo;
import com.vladooha.data.repositories.courses.CourseCategoryRepo;
import com.vladooha.data.repositories.courses.StudyGroupRepo;
import com.vladooha.data.repositories.courses.TeacherRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
public class TeacherService {
    @Autowired
    private LoginInfoRepo loginInfoRepo;
    @Autowired
    private ProfileInfoRepo profileInfoRepo;
    @Autowired
    private TeacherRepo teacherRepo;
    @Autowired
    private StudyGroupRepo studyGroupRepo;
    @Autowired
    private CourseCategoryRepo courseCategoryRepo;
    @Autowired
    private AdminService adminService;

    public String createGroup(String groupName) {
        if (studyGroupRepo.findByName(groupName) == null) {
            StudyGroup studyGroup = new StudyGroup();
            studyGroup.setName(groupName);

            studyGroupRepo.save(studyGroup);

            return "OK";
        }

        return "ALREADY_EXISTS";
    }

    public String createGroup(String groupName, String teacherName) {
        if (studyGroupRepo.findByName(groupName) == null) {
            StudyGroup studyGroup = new StudyGroup();
            studyGroup.setName(groupName);

            Teacher teacher = teacherRepo.findByUsername(teacherName);
            if (teacher != null) {
                studyGroup.getTeachers().add(teacher);
            }

            studyGroupRepo.save(studyGroup);

            return "OK";
        }

        return "ALREADY_EXISTS";
    }

    public String deleteGroup(Principal principal, String groupName) {
        StudyGroup studyGroup = getGroupIfAllowed(principal, groupName);

        if (studyGroup != null) {
            studyGroupRepo.delete(studyGroup);

            return "OK";
        }

        return "NO_PERMISSION";
    }

    public String addStudent(String groupName, String studentName) {
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
    }

    public String removeStudent(Principal principal, String groupName, String studentName) {
        StudyGroup studyGroup = getGroupIfAllowed(principal, groupName);

        if (studyGroup != null) {
            ProfileInfo profileInfo = profileInfoRepo.findByUsername(studentName);

            if (studyGroup.getStudents().remove(profileInfo)) {
                studyGroupRepo.save(studyGroup);

                return "OK";
            } else {
                return "USER_NOT_FOUND";
            }
        }

        return "NO_PERMISSION";
    }

    public List<StudentForm> getStudents(Principal principal, String groupName) {
        StudyGroup studyGroup = getGroupIfAllowed(principal, groupName);

        if (studyGroup != null) {
            List<StudentForm> response = new ArrayList<>();
            for (ProfileInfo student : studyGroup.getStudents()) {
                StudentForm studentForm = new StudentForm();

                studentForm.setId(student.getId());
                studentForm.setUsername(student.getUsername());
                studentForm.setName(student.getName());
                studentForm.setSurname(student.getSurname());

                response.add(studentForm);
            }

            return response;
        }

        return null;
    }

    public StudyGroup getGroupIfAllowed(Principal principal, String groupName) {
        StudyGroup studyGroup = studyGroupRepo.findByName(groupName);
        String teacherName = principal.getName();

        if (studyGroup != null &&
                studyGroup.getTeachers().contains(teacherName) || adminService.isAdmin(principal)) {
            return studyGroup;
        }

        return null;
    }

    public boolean isGroup(String groupName) {
        StudyGroup studyGroup = studyGroupRepo.findByName(groupName);

        if (studyGroup != null) {
            return true;
        }

        return false;
    }

    public boolean isTeacher(Principal principal) {
        LoginInfo loginInfo = loginInfoRepo.findByUsername(principal.getName());
        if (loginInfo != null && loginInfo.getRoles().contains(Role.TEACHER)) {
            return true;
        }

        return false;
    }

    public Set<StudyGroup> getTeachersGroups(String teacherName) {
        Teacher teacher = teacherRepo.findByUsername(teacherName);
        if (teacher != null) {
            return teacher.getStudyGroups();
        }

        return null;
    }
}
