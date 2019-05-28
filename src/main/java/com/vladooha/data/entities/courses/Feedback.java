package com.vladooha.data.entities.courses;

import com.vladooha.data.entities.ProfileInfo;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "course_feedback")
public class Feedback {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne(fetch = FetchType.EAGER, cascade =  CascadeType.ALL)
    @JoinColumn(name = "course_id", nullable = false)
    private Course course;

    @NotNull
    private Double complexity = 0.0;

    @NotNull
    private Double expectation = 0.0;

    @NotNull
    private Double comprehensibility = 0.0;

    @NotNull
    private Double rightAnsPercent = 0.0;

    @NotNull
    private Long voteCount = 0L;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "user_feedback_list",
            joinColumns = @JoinColumn(name = "profile_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "feedback_id", referencedColumnName = "id"))
    private Set<ProfileInfo> rates = new HashSet<>();



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }

    public Double getComplexity() {
        return complexity;
    }

    public void setComplexity(Double complexity) {
        this.complexity = complexity;
    }

    public Double getExpectation() {
        return expectation;
    }

    public void setExpectation(Double expectation) {
        this.expectation = expectation;
    }

    public Double getComprehensibility() {
        return comprehensibility;
    }

    public void setComprehensibility(Double comprehensibility) {
        this.comprehensibility = comprehensibility;
    }

    public Double getRightAnsPercent() {
        return rightAnsPercent;
    }

    public void setRightAnsPercent(Double rightAnsPercent) {
        this.rightAnsPercent = rightAnsPercent;
    }

    public Long getVoteCount() {
        return voteCount;
    }

    public void setVoteCount(Long rateCount) {
        this.voteCount = rateCount;
    }

    public Set<ProfileInfo> getRates() {
        return rates;
    }

    public void setRates(Set<ProfileInfo> rates) {
        this.rates = rates;
    }
}
