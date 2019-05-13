package com.vladooha.data.entities.courses;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "course")
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

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "course_tag_list",
            joinColumns = @JoinColumn(name = "course_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "tag_id", referencedColumnName = "id"))
    private Set<CourseTag> tags = new HashSet<>();

    @OneToMany(mappedBy = "id", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<CoursePage> pages = new ArrayList<>();

    private int pageCount;

    private int score;

    private Long firstPageId;

    private boolean isPrivate;

    private long time;

    @OneToMany(mappedBy = "course")
    private Set<CourseProgress> courseProgresses = new HashSet<>();



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public CourseCategory getCategory() {
        return category;
    }

    public void setCategory(CourseCategory category) {
        this.category = category;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<CourseTag> getTags() {
        return tags;
    }

    public void setTags(Set<CourseTag> tags) {
        this.tags = tags;
    }

    public List<CoursePage> getPages() {
        return pages;
    }

    public void setPages(List<CoursePage> pages) {
        this.pages = pages;
    }

    public int getPageCount() {
        return pageCount;
    }

    public void setPageCount(int pageCount) {
        this.pageCount = pageCount;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public Long getFirstPageId() {
        return firstPageId;
    }

    public void setFirstPageId(Long firstPageId) {
        this.firstPageId = firstPageId;
    }

    public boolean isPrivate() {
        return isPrivate;
    }

    public void setPrivate(boolean aPrivate) {
        isPrivate = aPrivate;
    }

    public long getTime() {
        return time;
    }

    public void setTime(long time) {
        this.time = time;
    }

    public Set<CourseProgress> getCourseProgresses() {
        return courseProgresses;
    }

    public void setCourseProgresses(Set<CourseProgress> courseProgresses) {
        this.courseProgresses = courseProgresses;
    }
}
