package com.vladooha.data.repositories.courses;

import com.vladooha.data.entities.courses.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface TeacherRepo extends JpaRepository<Teacher, Long> {
    @Query("select t from Teacher t where t.profileInfo.username = ?1")
    Teacher findByUsername(String username);
}