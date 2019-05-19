package com.vladooha.data.form;

import com.vladooha.data.validators.annotations.MetatagNotExists;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
@Setter
public class MetatagCreateForm {
    @MetatagNotExists
    @NotNull(message = "Название не может быть пустым!")
    private String metatagName;
}
