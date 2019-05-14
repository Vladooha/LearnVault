package com.vladooha.service;

import com.vladooha.data.entities.ProfileInfo;
import com.vladooha.data.entities.courses.CourseProgress;
import com.vladooha.data.entities.courses.Feedback;
import com.vladooha.data.form.FeedbackForm;
import com.vladooha.data.repositories.ProfileInfoRepo;
import com.vladooha.data.repositories.courses.CourseProgressRepo;
import com.vladooha.data.repositories.courses.FeedbackRepo;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class RatingService {
    private static final Logger logger = LogManager.getLogger(RatingService.class);

    @Autowired
    private FeedbackRepo feedbackRepo;
    @Autowired
    private ProfileInfoRepo profileInfoRepo;
    @Autowired
    private CourseProgressRepo courseProgressRepo;

    public boolean addRating(FeedbackForm feedbackForm, Long courseId, String username) {
        Feedback feedback = feedbackRepo.findByCourseId(courseId);
        ProfileInfo profileInfo = profileInfoRepo.findByUsername(username);
        if (profileInfo != null && feedback != null && !feedback.getRates().contains(profileInfo)) {
            CourseProgress currCourseProgress = null;

            logger.debug("Looking for course - " + courseId);

            for (CourseProgress courseProgress : profileInfo.getCourseProgresses()) {
                logger.debug("Looking at course - " + courseProgress.getCourse().getId());

                if (courseProgress.getCourse().getId() == courseId.longValue()) {
                    currCourseProgress = courseProgress;

                    break;
                }
            }

            logger.debug("User's course progresses - " + profileInfo.getCourseProgresses().size());
            logger.debug("Course progress found - " + (currCourseProgress != null));

            if (currCourseProgress != null && currCourseProgress.isCompleted()) {
                long voteCount = feedback.getVoteCount();

                double complexity = feedback.getComplexity();
                double complexityMark = feedbackForm.getComplexity();
                double newComplexity = addMark(complexity, complexityMark, voteCount);
                feedback.setComplexity(newComplexity);

                double expectation = feedback.getExpectation();
                double expectationMark = feedbackForm.getExpectation();
                double newExpectation = addMark(expectation, expectationMark, voteCount);
                feedback.setExpectation(newExpectation);

                double comprehensibility = feedback.getComprehensibility();
                double comprehensibilityMark = feedbackForm.getComprehensibility();
                double newComprehensibility = addMark(comprehensibility, comprehensibilityMark, voteCount);
                feedback.setComprehensibility(newComprehensibility);

                int courseScore = currCourseProgress.getCourse().getScore();
                if (courseScore != 0) {
                    double rightAnsPercent = feedback.getRightAnsPercent();
                    double userScore = (double) currCourseProgress.getCurrScore();
                    double rightAnsPercentMark = userScore / courseScore * 100.0;
                    double newRightAnsPercent = addMark(rightAnsPercent, rightAnsPercentMark, voteCount);

                    logger.debug("Old percentage - " + rightAnsPercent);
                    logger.debug("User score - " + userScore);
                    logger.debug("Course score - " + courseScore);
                    logger.debug("Percentage mark - " + rightAnsPercentMark);
                    logger.debug("New percentage - " + newRightAnsPercent);

                    feedback.setRightAnsPercent(newRightAnsPercent);
                }
                feedback.setVoteCount(voteCount + 1);

                Set<ProfileInfo> rates = feedback.getRates();
                rates.add(profileInfo);
                feedback.setRates(rates);

                feedbackRepo.save(feedback);

                return true;
            }
        }

        return false;
    }

    private double addMark(double oldRating, double newMark, long voteCount) {
        return (oldRating * voteCount + newMark) / (voteCount + 1);
    }
}
