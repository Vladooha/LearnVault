package com.vladooha.data.repositories.courses;

import com.vladooha.data.entities.courses.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeacherRepo extends JpaRepository<Teacher, Long> {
    Teacher findByUsername(String username);
}