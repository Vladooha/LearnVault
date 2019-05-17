package com.vladooha.config;

import com.vladooha.interceptor.MainMenuInterceptor;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.core.io.support.ResourcePatternResolver;
import org.springframework.core.io.support.ResourcePatternUtils;
import org.springframework.util.ResourceUtils;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.*;
import org.springframework.web.servlet.view.freemarker.FreeMarkerConfigurer;
import org.springframework.web.servlet.view.freemarker.FreeMarkerViewResolver;

import java.io.File;
import java.io.IOException;

@Configuration
@EnableWebMvc
@ComponentScan({"com.vladooha.controller"})
public class MvcConfig implements WebMvcConfigurer {
    private static final Logger logger = LogManager.getLogger(MvcConfig.class);

    @Autowired
    private ResourceLoader resourceLoader;
    @Autowired
    private MainMenuInterceptor mainMenuInterceptor;

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        try {
            ClassLoader classLoader = getClass().getClassLoader();
            File resourceDir = new File(classLoader.getResource("templates/index.ftl").getFile()).getParentFile();
            ResourcePatternResolver resourceContainer = ResourcePatternUtils.getResourcePatternResolver(resourceLoader);
            Resource[] resources = resourceContainer.getResources("classpath:/templates/**/*.ftl");
            for (Resource resource : resources) {
                String filename = resource.getFilename().split("\\.")[0];
                String filepath = resourceDir.toURI().relativize(
                        resource.getFile().getParentFile().toURI()).getPath() + filename;

                registry
                        .addViewController("/" + filepath)
                        .setViewName(filepath);
            }
        } catch (IOException e) {
            logger.error("Can't create controllers for .ftl templates", e);
        }

        registry
                .addViewController("/login")
                .setViewName("login");

        registry
                .addViewController("/")
                .setViewName("index");

    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(mainMenuInterceptor)
                .addPathPatterns("/*")
                .excludePathPatterns("/login")
                .excludePathPatterns("/reg")
                .excludePathPatterns("/h2-console");
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry
                .addResourceHandler("/static/**")
                .addResourceLocations("classpath:/static/");
    }

    @Bean
    public ViewResolver getViewResolver() {
        FreeMarkerViewResolver freeMarkerViewResolver = new FreeMarkerViewResolver();
        freeMarkerViewResolver.setCache(false);
        freeMarkerViewResolver.setOrder(1);
        freeMarkerViewResolver.setPrefix("");
        freeMarkerViewResolver.setSuffix(".ftl");
        freeMarkerViewResolver.setContentType("text/html; charset=UTF-8");

        return freeMarkerViewResolver;
    }

    @Bean
    public FreeMarkerConfigurer getFreeMarkerConfigurer() {
        FreeMarkerConfigurer configurer = new FreeMarkerConfigurer();
        configurer.setDefaultEncoding("UTF-8");
        configurer.setTemplateLoaderPaths("classpath:/templates");

        return configurer;
    }
}
