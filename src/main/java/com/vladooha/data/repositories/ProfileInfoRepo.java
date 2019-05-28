package com.vladooha.data.repositories;

import com.vladooha.data.entities.ProfileInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface ProfileInfoRepo extends JpaRepository<ProfileInfo, Long> {
    ProfileInfo findByUsername(String username);
}
