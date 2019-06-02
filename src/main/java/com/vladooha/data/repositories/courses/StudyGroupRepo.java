package com.vladooha.data.repositories.courses;

import com.vladooha.data.entities.courses.StudyGroup;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudyGroupRepo extends JpaRepository<StudyGroup, Long> {
    StudyGroup findByName(String name);
}
