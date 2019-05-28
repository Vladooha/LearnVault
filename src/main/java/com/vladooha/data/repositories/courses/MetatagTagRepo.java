package com.vladooha.data.repositories.courses;

import com.vladooha.data.entities.courses.CourseTag;
import com.vladooha.data.entities.courses.Metatag;
import com.vladooha.data.entities.courses.MetatagTag;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MetatagTagRepo extends JpaRepository<MetatagTag, Long> {
    List<MetatagTag> findByMetatag(Metatag metatag);
    List<MetatagTag> findByTag(CourseTag tag);
    MetatagTag findByMetatagAndTag(Metatag metatag, CourseTag tag);
}
