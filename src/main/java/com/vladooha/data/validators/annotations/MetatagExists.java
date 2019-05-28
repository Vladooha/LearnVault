package com.vladooha.data.validators.annotations;

import com.vladooha.data.validators.MetatagExistsValidator;

import java.lang.annotation.*;
import javax.validation.*;

@Documented
@Constraint(validatedBy = MetatagExistsValidator.class)
@Target({ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
public @interface MetatagExists {

    String message() default "Такого метатега не существует";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
