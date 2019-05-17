package com.vladooha.data.entities.courses;

import com.vladooha.data.entities.LoginInfo;
import com.vladooha.data.entities.ProfileInfo;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(
        name = "course_progress",
        uniqueConstraints = @UniqueConstraint(columnNames = { "user_id", "course_id" }))
public class CourseProgress {
//    @Id
//    @Column(name = "user_prog_id")
//    private Long userId;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "course_prog_id")
    private Long courseProgId;

    @ManyToOne
    @JoinColumn(name = "user_id")
    //@PrimaryKeyJoinColumn(name="user_key", referencedColumnName="id")
    /* if this JPA model doesn't create a table for the "PROJ_EMP" entity,
     * please comment out the @PrimaryKeyJoinColumn, and use the ff:
     * @JoinColumn(name = "employeeId", updatable = false, insertable = false)
     * or @JoinColumn(name = "employeeId", updatable = false, insertable = false, referencedColumnName = "id")
     */
    private ProfileInfo user;
    @ManyToOne
    @JoinColumn(name = "course_id")
    //@PrimaryKeyJoinColumn(name="course_key", referencedColumnName="id")
    /* the same goes here:
     * if this JPA model doesn't create a table for the "PROJ_EMP" entity,
     * please comment out the @PrimaryKeyJoinColumn, and use the ff:
     * @JoinColumn(name = "projectId", updatable = false, insertable = false)
     * or @JoinColumn(name = "projectId", updatable = false, insertable = false, referencedColumnName = "id")
     */
    private Course course;

//    @ManyToMany(cascade = CascadeType.ALL)
//    @JoinTable(name = "course_progress_pages_list",
//            joinColumns = {@JoinColumn(name = "course_id", referencedColumnName = "course_id"),
//                            @JoinColumn(name = "user_id", referencedColumnName = "user_id")},
//            inverseJoinColumns = @JoinColumn(name = "page_id", referencedColumnName = "id"))
//    private Set<CoursePage> coursePages;

    private int currPage;

    private int currScore;

    private long beginTime;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "wrong_answered_test_pages",
            joinColumns = @JoinColumn(name = "progress_id", referencedColumnName = "course_prog_id"),
            inverseJoinColumns = @JoinColumn(name = "page_id", referencedColumnName = "id"))
    private Set<CourseTestPage> missedAnswers = new HashSet<>();

    private boolean isRated = false;

    private boolean isCompleted = false;



    public Long getCourseProgId() {
        return courseProgId;
    }

    public void setCourseProgId(Long courseProgId) {
        this.courseProgId = courseProgId;
    }

    public ProfileInfo getUser() {
        return user;
    }

    public void setUser(ProfileInfo user) {
        this.user = user;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }

    public int getCurrPage() {
        return currPage;
    }

    public void setCurrPage(int currPage) {
        this.currPage = currPage;
    }

    public int getCurrScore() {
        return currScore;
    }

    public void setCurrScore(int currScore) {
        this.currScore = currScore;
    }

    public long getBeginTime() {
        return beginTime;
    }

    public void setBeginTime(long beginTime) {
        this.beginTime = beginTime;
    }

    public boolean isRated() {
        return isRated;
    }

    public void setRated(boolean rated) {
        isRated = rated;
    }

    public boolean isCompleted() {
        return isCompleted;
    }

    public void setCompleted(boolean completed) {
        isCompleted = completed;
    }

    public Set<CourseTestPage> getMissedAnswers() {
        return missedAnswers;
    }

    public void setMissedAnswers(Set<CourseTestPage> missedAnswers) {
        this.missedAnswers = missedAnswers;
    }
}
