package com.vladooha.data.repositories.courses;

import com.vladooha.data.entities.courses.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CourseRepo extends JpaRepository<Course, Long> {
}
