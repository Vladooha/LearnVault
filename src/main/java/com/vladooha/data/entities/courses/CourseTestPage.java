package com.vladooha.data.entities.courses;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity(name = "course_test_page")
@DiscriminatorValue("test")
public class CourseTestPage extends CoursePage {
    private String title;

    private String question;

    private int score;

    private String ans;

    private String rightAns;

    private String type;



    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public String getAns() {
        return ans;
    }

    public void setAns(String ans) {
        this.ans = ans;
    }

    public String getRightAns() {
        return rightAns;
    }

    public void setRightAns(String rightAns) {
        this.rightAns = rightAns;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
