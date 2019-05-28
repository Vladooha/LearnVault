package com.vladooha.data.validators.annotations;

import com.vladooha.data.validators.MetatagNotExistsValidator;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.*;

@Documented
@Constraint(validatedBy = MetatagNotExistsValidator.class)
@Target({ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
public @interface MetatagNotExists {

    String message() default "Такой метатег уже существует";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
