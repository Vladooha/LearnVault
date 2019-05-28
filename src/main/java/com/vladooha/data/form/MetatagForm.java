package com.vladooha.data.form;

import com.vladooha.data.validators.annotations.MetatagExists;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Getter
@Setter
public class MetatagForm {
    @NotNull
    @MetatagExists
    private String metatagName;

    @NotNull
    private String tagName;

    @NotNull
    @Min(value = 0, message = "Вес не может быть отрицательным")
    private int weight;
}
