package com.vladooha.data.entities.courses;

import com.vladooha.data.entities.ProfileInfo;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "teacher")
public class Teacher {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(unique = true)
    private String username;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "study_group",
            joinColumns = @JoinColumn(name = "teacher_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "student_id", referencedColumnName = "id"))
    private Set<ProfileInfo> students = new HashSet<>();



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Set<ProfileInfo> getStudents() {
        return students;
    }

    public void setStudents(Set<ProfileInfo> students) {
        this.students = students;
    }
}
