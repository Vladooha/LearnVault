package com.vladooha.data.entities.courses;

import com.vladooha.data.entities.ProfileInfo;
import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(
        name = "study_group",
        uniqueConstraints=
        @UniqueConstraint(columnNames={"name"}))
@Data
public class StudyGroup {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
//    @Getter(AccessLevel.PRIVATE)
//    @Setter(AccessLevel.PRIVATE)
//    private String teachers;
//    @Getter(AccessLevel.PRIVATE)
//    @Setter(AccessLevel.PRIVATE)
//    private String students;
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "teacher_group",
            joinColumns = @JoinColumn(name = "group_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "teacher_id", referencedColumnName = "id"))
    private Set<Teacher> teachers;
    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(name = "student_group",
            joinColumns = @JoinColumn(name = "group_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "student_id", referencedColumnName = "id"))
    private Set<ProfileInfo> students;
    @EqualsAndHashCode.Exclude
    @OneToMany(mappedBy = "studyGroup")
    private Set<Course> courses;




//    public Set<String> getTeachers() {
//        String[] teachersArr = teachers.split(";");
//        Set<String> result = new HashSet<>();
//        for (String teacher : teachersArr) {
//            result.add(teacher);
//        }
//
//        return result;
//    }
//
//    public void setTeachers(Set<String> teacherSet) {
//        StringBuilder teacherStr = new StringBuilder();
//        for (String teacher : teacherSet) {
//            teacherStr.append(teacher);
//            teacherStr.append(";");
//        }
//        teacherStr.deleteCharAt(teacherStr.lastIndexOf(";"));
//
//        teachers = teacherStr.toString();
//    }
//
//    public Set<String> getStudents() {
//        String[] studentsArr = students.split(";");
//        Set<String> result = new HashSet<>();
//        for (String student : studentsArr) {
//            result.add(student);
//        }
//
//        return result;
//    }
//
//    public void setStudents(Set<String> studentSet) {
//        StringBuilder studentStr = new StringBuilder();
//        for (String student : studentSet) {
//            studentStr.append(student);
//            studentStr.append(";");
//        }
//        studentStr.deleteCharAt(studentStr.lastIndexOf(";"));
//
//        students = studentStr.toString();
//    }
}
