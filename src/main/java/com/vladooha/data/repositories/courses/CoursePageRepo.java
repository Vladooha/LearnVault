package com.vladooha.data.repositories.courses;

import com.vladooha.data.entities.courses.Course;
import com.vladooha.data.entities.courses.CoursePage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CoursePageRepo extends JpaRepository<CoursePage, Long> {
    @Query(value = "SELECT page_type FROM course_page WHERE id = ?1", nativeQuery = true)
    String pageTypeById(Long id);

    List<CoursePage> findAllByCourse(Course course);
    CoursePage findByCourseAndNum(Course course, int num);
}
