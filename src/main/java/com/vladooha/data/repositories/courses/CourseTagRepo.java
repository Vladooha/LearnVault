package com.vladooha.data.repositories.courses;

import com.vladooha.data.entities.courses.Course;
import com.vladooha.data.entities.courses.CourseTag;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CourseTagRepo extends JpaRepository<CourseTag, Long> {
    CourseTag findByName(String name);
}
