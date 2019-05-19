package com.vladooha.service;

import com.vladooha.data.entities.LoginInfo;
import com.vladooha.data.entities.ProfileInfo;
import com.vladooha.data.entities.Role;
import com.vladooha.data.repositories.LoginInfoRepo;
import com.vladooha.data.repositories.ProfileInfoRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Collections;
import java.util.Optional;
import java.util.regex.Pattern;

@Service
public class UserService {
    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    private static final Pattern EMAIL_REGEX =
            Pattern.compile("^[a-zA-Z0-9_!#$%&’*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$", Pattern.CASE_INSENSITIVE);
    private static final Pattern LOGIN_REGEX =
            Pattern.compile("^[a-z0-9_-]{6,16}$", Pattern.CASE_INSENSITIVE);

    @Autowired
    private LoginInfoRepo loginInfoRepo;
    @Autowired
    private ProfileInfoRepo profileInfoRepo;

    @Nullable
    public LoginInfo createUser(
            String username,
            String email,
            String password) {

        if (!checkUsername(username) || !checkEmail(email)) {
            return null;
        }

        // TODO: Good data constraints
        if (password == null || password.length() < 6) {
            logger.debug("Bad login data. Wrong password '" + password + "'");

            return null;
        }

        LoginInfo loginInfo = new LoginInfo();
        loginInfo.setUsername(username);
        loginInfo.setEmail(email);
        loginInfo.setPass(password);

        loginInfo.setRoles(Collections.singleton(Role.USER));
        loginInfo.setActive(true);

        loginInfoRepo.save(loginInfo);

        return loginInfo;
    }

    public ProfileInfo updateProfile(
            String username,
            String name,
            String surname,
            String date,
            String tnumber) {

        // TODO: Good profile data constraints
        if (name == null || name.length() < 3) {
            logger.debug("Bad profile data. Wrong name '" + name + "'. Field ignored");

            name = null;
        }

        if (surname == null || surname.length() < 3) {
            logger.debug("Bad profile data. Wrong surname '" + surname + "'");

            surname = null;
        }

        int tnumberValue = -1;
        try {
            tnumberValue = Integer.parseInt(tnumber);
        } catch (Exception e) {
            logger.debug("Bad profile data. Wrong tnumber '" + tnumber + "'");

            tnumber = null;
        }

        LocalDate bDate = null;
        try {
            bDate = LocalDate.parse(date, DateTimeFormatter.ofPattern("yyyy-MM-dd"));
        } catch (Exception e) {
            logger.debug("Bad profile data. Wrong date '" + date + "'");

            bDate = null;
        }

        ProfileInfo profileInfo = new ProfileInfo();
        profileInfo.setUsername(username);

        if (name != null) {
            profileInfo.setName(name);
        } else {
            profileInfo.setName("-");
        }

        if (surname != null) {
            profileInfo.setSurname(surname);
        } else {
            profileInfo.setSurname("-");
        }

        if (tnumberValue != -1) {
            profileInfo.setTnumber(tnumberValue);
        } else {
            profileInfo.setTnumber(-1);
        }

        if (bDate != null) {
            profileInfo.setBday(bDate.getDayOfMonth());
            profileInfo.setBmonth(bDate.getMonthValue());
            profileInfo.setByear(bDate.getYear());
        } else {
            profileInfo.setBday(0);
            profileInfo.setBmonth(0);
            profileInfo.setByear(0);
        }

        profileInfoRepo.save(profileInfo);

        return profileInfo;
    }

    public boolean checkUsername(String username) {
        if (username == null || !LOGIN_REGEX.matcher(username).find()) {
            logger.debug("Bad login data. Wrong username '" + username + "'");

            return false;
        }


        if (loginInfoRepo.findByUsername(username) != null) {
            logger.debug("Bad login data. Username exists '" + username + "'");

            return false;
        } else {
            return true;
        }
    }

    public boolean checkEmail(String email) {
        if (email == null || !EMAIL_REGEX.matcher(email).find()) {
            logger.debug("Bad login data. Wrong email '" + email + "'");

            return false;
        }

        if (loginInfoRepo.findByEmail(email) != null) {
            logger.debug("Bad login data. Email exists '" + email + "'");

            return false;
        } else {
            return true;
        }
    }

    @Nullable
    public LoginInfo getUserById(long id) {
        Optional<LoginInfo> optional = loginInfoRepo.findById(id);
        if (optional.isPresent()) {
            return optional.get();
        }

        return null;
    }

    @Nullable
    public ProfileInfo getProfileById(long id) {
        Optional<ProfileInfo> optional = profileInfoRepo.findById(id);
        if (optional.isPresent()) {
            return optional.get();
        }

        return null;
    }

    @Nullable
    public LoginInfo getUserByUsername(String username) {
        return loginInfoRepo.findByUsername(username);
    }

    @Nullable
    public ProfileInfo getProfileByUsername(String username) {
        return profileInfoRepo.findByUsername(username);
    }
}
