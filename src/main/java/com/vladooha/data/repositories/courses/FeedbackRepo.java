package com.vladooha.data.repositories.courses;

import com.vladooha.data.entities.courses.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedbackRepo extends JpaRepository<Feedback, Long> {
    Feedback findByCourseId(Long courseId);
}
