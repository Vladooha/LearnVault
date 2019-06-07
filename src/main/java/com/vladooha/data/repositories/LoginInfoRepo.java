package com.vladooha.data.repositories;

import com.vladooha.data.entities.LoginInfo;
import com.vladooha.data.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Set;

public interface LoginInfoRepo extends JpaRepository<LoginInfo, Long> {
    LoginInfo findByUsername(String username);
    LoginInfo findByEmail(String email);
    List<LoginInfo> findByUsernameOrEmail(String username, String email);
    List<LoginInfo> findByRolesContaining(Role role);
    List<LoginInfo> findByRoles(Set<Role> roleSet);
}
