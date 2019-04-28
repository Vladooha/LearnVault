package com.vladooha.data.entities.courses;

import java.io.Serializable;

public class CourseProgressId implements Serializable {
    private Long userId;

    private Long courseId;

    public int hashCode() {
        return (int)(userId + courseId);
    }

    public boolean equals(Object object) {
        if (object instanceof CourseProgressId) {
            CourseProgressId otherId = (CourseProgressId) object;

            return (otherId.userId == this.userId) && (otherId.courseId == this.courseId);
        }

        return false;
    }
}
