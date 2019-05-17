package com.vladooha.interceptor;

import com.vladooha.data.entities.courses.CourseCategory;
import com.vladooha.data.repositories.courses.CourseCategoryRepo;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Component
public class MainMenuInterceptor extends HandlerInterceptorAdapter {
    private static final Logger logger = LogManager.getLogger(MainMenuInterceptor.class);

    @Autowired
    private CourseCategoryRepo courseCategoryRepo;

    @Override
    public void postHandle(
            HttpServletRequest request,
            HttpServletResponse response,
            Object handler,
            ModelAndView modelAndView)
            throws Exception {
        if (modelAndView != null) {
            List<CourseCategory> courseCategoryList = courseCategoryRepo.findAll();
            if (courseCategoryList != null) {
                modelAndView.addObject("categories", courseCategoryList);
            }
        }
    }
}
