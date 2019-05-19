package com.vladooha.data.entities.courses;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "course")
@Data
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String author;

    @ManyToOne
    @JoinColumn
    private CourseCategory category;

    private String description;

    private String name;

    private String pic;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "course_tag_list",
            joinColumns = @JoinColumn(name = "course_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "tag_id", referencedColumnName = "id"))
    @EqualsAndHashCode.Exclude
    private Set<CourseTag> tags = new HashSet<>();

    @OneToMany(mappedBy = "id", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @EqualsAndHashCode.Exclude
    private List<CoursePage> pages = new ArrayList<>();

    private int pageCount;

    private int score;

    private Long firstPageId;

    private boolean isPrivate;

    private long time;

    @OneToMany(mappedBy = "course")
    @EqualsAndHashCode.Exclude
    private Set<CourseProgress> courseProgresses = new HashSet<>();

    @OneToOne(fetch = FetchType.EAGER, cascade =  CascadeType.ALL, mappedBy = "course")
    private Feedback feedback;

    private String specialization;
}
