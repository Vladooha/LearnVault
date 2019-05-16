package com.vladooha.data.repositories.courses;

import com.vladooha.data.entities.courses.Course;
import com.vladooha.data.entities.courses.CourseCategory;
import com.vladooha.data.entities.courses.CourseTag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;

import javax.persistence.LockModeType;
import java.util.List;

public interface CourseRepo extends JpaRepository<Course, Long> {
    List<Course> findByDescriptionContaining(String description);
    List<Course> findByNameContaining(String name);
    List<Course> findByTags(CourseTag courseTag);
    List<Course> findByCategory(CourseCategory courseCategory);
}
