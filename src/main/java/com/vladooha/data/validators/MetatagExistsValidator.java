package com.vladooha.data.validators;

import com.vladooha.data.repositories.courses.MetatagRepo;
import com.vladooha.data.validators.annotations.MetatagExists;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class MetatagExistsValidator implements ConstraintValidator<MetatagExists, String> {
    private static final Logger logger = LogManager.getLogger(MetatagExistsValidator.class);

    @Autowired
    private MetatagRepo metatagRepo;

    @Override
    public void initialize(MetatagExists constraintAnnotation) { }

    @Override
    public boolean isValid(String metatagName, ConstraintValidatorContext context) {
        if (metatagRepo.findByName(metatagName) == null) {
            return false;
        }

        return true;
    }
}
