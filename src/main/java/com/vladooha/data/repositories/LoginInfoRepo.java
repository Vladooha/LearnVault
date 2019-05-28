package com.vladooha.data.repositories;

import com.vladooha.data.entities.LoginInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LoginInfoRepo extends JpaRepository<LoginInfo, Long> {
    LoginInfo findByUsername(String username);
    LoginInfo findByEmail(String email);
    List<LoginInfo> findByUsernameOrEmail(String username, String email);
}
