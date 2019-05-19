package com.vladooha.data.form;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class FeedbackForm {
    @NotNull
    @Min(value = 1, message = "Оценка должна быть не меньше 1")
    @Max(value = 5, message = "Оценка должна быть не больше 5")
    private Integer complexity = 1;

    @NotNull
    @Min(value = 1, message = "Оценка должна быть не меньше 1")
    @Max(value = 5, message = "Оценка должна быть не больше 5")
    private Integer expectation = 1;

    @NotNull
    @Min(value = 1, message = "Оценка должна быть не меньше 1")
    @Max(value = 5, message = "Оценка должна быть не больше 5")
    private Integer comprehensibility = 1;

//    @NotNull
//    @Min(value = 0, message = "Min percentage is 0")
//    @Max(value = 100, message = "Maxpercentage is 100")
    private Integer rightAnsPercent = 0;



    public Integer getComplexity() {
        return complexity;
    }

    public void setComplexity(Integer complexity) {
        this.complexity = complexity;
    }

    public Integer getExpectation() {
        return expectation;
    }

    public void setExpectation(Integer expectation) {
        this.expectation = expectation;
    }

    public Integer getComprehensibility() {
        return comprehensibility;
    }

    public void setComprehensibility(Integer comprehensibility) {
        this.comprehensibility = comprehensibility;
    }

    public Integer getRightAnsPercent() {
        return rightAnsPercent;
    }

    public void setRightAnsPercent(Integer rightAnsPercent) {
        this.rightAnsPercent = rightAnsPercent;
    }
}
