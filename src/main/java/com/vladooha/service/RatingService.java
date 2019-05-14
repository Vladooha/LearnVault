package com.vladooha.service;

import com.vladooha.data.entities.ProfileInfo;
import com.vladooha.data.entities.courses.Feedback;
import com.vladooha.data.form.FeedbackForm;
import com.vladooha.data.repositories.ProfileInfoRepo;
import com.vladooha.data.repositories.courses.FeedbackRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RatingService {
    @Autowired
    private FeedbackRepo feedbackRepo;
    @Autowired
    private ProfileInfoRepo profileInfoRepo;

    public boolean addRating(FeedbackForm feedbackForm, Long courseId, String username) {
        Feedback feedback = feedbackRepo.findByCourseId(courseId);
        ProfileInfo profileInfo = profileInfoRepo.findByUsername(username);

        if (feedback != null && !feedback.getRates().contains(profileInfo)) {
            long voteCount = feedback.getVoteCount();

            double complexity = feedback.getComplexity();
            double complexityMark = feedbackForm.getComplexity();
            double newComplexity = addMark(complexity, complexityMark, voteCount);

            double expectation = feedback.getExpectation();
            double expectationMark = feedbackForm.getExpectation();
            double newExpectation = addMark(expectation, expectationMark, voteCount);

            double comprehensibility = feedback.getComprehensibility();
            double comprehensibilityMark = feedbackForm.getComprehensibility();
            double newComprehensibility = addMark(comprehensibility, comprehensibilityMark, voteCount);

            double rightAnsPercent = feedback.getRightAnsPercent();
            double rightAnsPercentMark = feedbackForm.getRightAnsPercent();
            double newRightAnsPercent = addMark(rightAnsPercent, rightAnsPercentMark, voteCount);

            feedback.setComplexity(newComplexity);
            feedback.setExpectation(newExpectation);
            feedback.setComprehensibility(newComprehensibility);
            feedback.setRightAnsPercent(newRightAnsPercent);

            feedbackRepo.save(feedback);

            return true;
        }

        return false;
    }

    private double addMark(double oldRating, double newMark, long voteCount) {
        return (oldRating * voteCount + newMark) / (voteCount + 1);
    }
}
