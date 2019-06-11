package com.vladooha.data.entities.courses;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity(name = "course_text_page")
@DiscriminatorValue("text")
public class CourseTextPage extends CoursePage {
    private String title;

    private String text;

    private String file;

    private String link;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getFile() {
        return file;
    }

    public void setFile(String file) {
        this.file = file;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }
}
