package com.vladooha.data.entities.courses;

import javax.persistence.*;
import java.util.Set;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "page_type")
@Table(name = "course_page")
public class CoursePage {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Long nextPageId;

    private Long prevPageId;

    @Column(name = "page_type", insertable = false, updatable = false)
    private String pageType;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn
    private Course course;

    private int num;

//    @ManyToMany(mappedBy = "coursePages")
//    private Set<CourseProgress> courseProgresses;




    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getNextPageId() {
        return nextPageId;
    }

    public void setNextPageId(Long nextPageId) {
        this.nextPageId = nextPageId;
    }

    public Long getPrevPageId() {
        return prevPageId;
    }

    public void setPrevPageId(Long prevPageId) {
        this.prevPageId = prevPageId;
    }

    public String getPageType() {
        return pageType;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }

    public int getNum() {
        return num;
    }

    public void setNum(int num) {
        this.num = num;
    }
}
