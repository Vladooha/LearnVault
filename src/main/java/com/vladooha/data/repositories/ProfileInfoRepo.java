package com.vladooha.data.repositories;

import com.vladooha.data.entities.ProfileInfo;
import org.springframework.data.repository.CrudRepository;

public interface ProfileInfoRepo extends CrudRepository<ProfileInfo, Integer> {
    ProfileInfo findByUsername(String username);
}
