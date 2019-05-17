package com.vladooha.service;

import com.vladooha.data.entities.LoginInfo;
import com.vladooha.data.entities.ProfileInfo;
import com.vladooha.data.entities.Role;
import com.vladooha.data.entities.courses.Teacher;
import com.vladooha.data.form.StudentForm;
import com.vladooha.data.repositories.LoginInfoRepo;
import com.vladooha.data.repositories.ProfileInfoRepo;
import com.vladooha.data.repositories.courses.CourseCategoryRepo;
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
    private CourseCategoryRepo courseCategoryRepo;

    public String removeStudent(Principal principal, String teacherName, String studentName) {
        if (isTeacher(principal)) {
            return removeStudentOperation(teacherName, studentName);
        } else {
            return "NO_PERMISSIONS";
        }
    }

    public List<StudentForm> getStudents(Principal principal, String teacherName) {
        if (isTeacher(principal)) {
            return  getStudentsOperation(teacherName);
        }

        return null;
    }

    public boolean isTeacher(Principal principal) {
        LoginInfo loginInfo = loginInfoRepo.findByUsername(principal.getName());

        if (loginInfo != null) {
            if (loginInfo.getRoles().contains(Role.TEACHER)) {
                return true;
            }
        }

        return false;
    }

    protected String removeStudentOperation(String teacherName, String studentName) {
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
    }

    protected List<StudentForm> getStudentsOperation(String teacherName) {
        Teacher teacher = teacherRepo.findByUsername(teacherName);

        if (teacher != null) {
            List<StudentForm> response = new ArrayList<>();
            for (ProfileInfo student : teacher.getStudents()) {
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
}
