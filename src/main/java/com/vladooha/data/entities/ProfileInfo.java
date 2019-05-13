package com.vladooha.data.entities;

import com.vladooha.data.entities.courses.CourseProgress;
import com.vladooha.data.entities.courses.Teacher;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "profile_info")
public class ProfileInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(unique = true)
    private String username;

    private String name;

    private String surname;

    private int bday;

    private int bmonth;

    private int byear;

    private int tnumber;

    @OneToMany(mappedBy = "user")
    private Set<CourseProgress> courseProgresses;

    @ManyToMany(mappedBy = "students")
    private Set<Teacher> teachers;




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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public int getBday() {
        return bday;
    }

    public void setBday(int bday) {
        this.bday = bday;
    }

    public int getBmonth() {
        return bmonth;
    }

    public void setBmonth(int bmonth) {
        this.bmonth = bmonth;
    }

    public int getByear() {
        return byear;
    }

    public void setByear(int byear) {
        this.byear = byear;
    }

    public int getTnumber() {
        return tnumber;
    }

    public void setTnumber(int tnumber) {
        this.tnumber = tnumber;
    }

    public Set<CourseProgress> getCourseProgresses() {
        return courseProgresses;
    }

    public void setCourseProgresses(Set<CourseProgress> courseProgresses) {
        this.courseProgresses = courseProgresses;
    }
}
