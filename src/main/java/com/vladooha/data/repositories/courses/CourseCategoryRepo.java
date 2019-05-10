package com.vladooha.data.repositories.courses;

import com.vladooha.data.entities.courses.CourseCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseCategoryRepo extends JpaRepository<CourseCategory, Long> {
    CourseCategory findByNum(int num);
    CourseCategory findByName(String name);
}
