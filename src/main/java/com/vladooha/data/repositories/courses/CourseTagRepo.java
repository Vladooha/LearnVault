package com.vladooha.data.repositories.courses;

import com.vladooha.data.entities.courses.CourseTag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseTagRepo extends JpaRepository<CourseTag, Long> {
    CourseTag findByName(String name);
}
