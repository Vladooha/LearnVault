package com.vladooha.data.repositories.courses;

import com.vladooha.data.entities.ProfileInfo;
import com.vladooha.data.entities.courses.Course;
import com.vladooha.data.entities.courses.CourseProgress;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseProgressRepo extends JpaRepository<CourseProgress, Long> {
    CourseProgress findByUserAndCourse(ProfileInfo user, Course course);
    CourseProgress findByUserIdAndCourseId(Long userId, Long courseId);
}
