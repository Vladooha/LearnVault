package com.vladooha.data.repositories.courses;

import com.vladooha.data.entities.courses.Metatag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MetatagRepo extends JpaRepository<Metatag, Long> {
    Metatag findByName(String name);
}
