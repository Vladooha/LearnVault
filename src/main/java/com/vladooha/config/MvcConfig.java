package com.vladooha.config;

import com.vladooha.interceptor.MainMenuInterceptor;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.hibernate.mapping.Collection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.core.io.support.ResourcePatternResolver;
import org.springframework.core.io.support.ResourcePatternUtils;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.*;
import org.springframework.web.servlet.view.freemarker.FreeMarkerConfigurer;
import org.springframework.web.servlet.view.freemarker.FreeMarkerViewResolver;

import java.io.File;
import java.io.IOException;
import java.lang.reflect.Array;
import java.net.URL;
import java.security.CodeSource;
import java.util.Arrays;
import java.util.Collections;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;

@Configuration
@EnableWebMvc
@ComponentScan({"com.vladooha.controller"})
public class MvcConfig implements WebMvcConfigurer {
    private static final Logger logger = LogManager.getLogger(MvcConfig.class);

    @Autowired
    private ResourceLoader resourceLoader;
    @Autowired
    private MainMenuInterceptor mainMenuInterceptor;

    @javax.annotation.Resource(name="upload_path")
    private String uploadPath;
    @Value("${upload.path.mask}")
    private String uploadPathMask;

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
//        try {
//            ClassLoader classLoader = getClass().getClassLoader();
//            File resourceDir = new File(classLoader.getResource("templates/index.ftl").getFile()).getParentFile();
//            ResourcePatternResolver resourceContainer = ResourcePatternUtils.getResourcePatternResolver(resourceLoader);
//            Resource[] resources = resourceContainer.getResources("classpath:/templates/**/*.ftl");
//            for (Resource resource : resources) {
//                String filename = resource.getFilename().split("\\.")[0];
//                String filepath = resourceDir.toURI().relativize(
//                        resource.getFile().getParentFile().toURI()).getPath() + filename;
//
//                registry
//                        .addViewController("/" + filepath)
//                        .setViewName(filepath);
//            }
//        } catch (IOException e) {
//            logger.error("Can't create controllers for .ftl templates", e);
//        }


//        CodeSource src = MvcConfig.class.getProtectionDomain().getCodeSource();
//        try {
//            if (src != null) {
//                URL jar = src.getLocation();
//                ZipInputStream zip = new ZipInputStream(jar.openStream());
//                while (true) {
//                    ZipEntry e = zip.getNextEntry();
//                    if (e == null)
//                        break;
//                    String name = e.getName();
//                    String templatesFolder = "/BOOT-INF/classes/templates/";
//                    if (name.startsWith(templatesFolder)) {
//                        /* Do something with this entry. */
//                        String[] pathFiles = name.split("\\/");
//                        String filename = pathFiles[pathFiles.length-1];
//                        registry
//                          .addViewController("/" + name.replace(templatesFolder, ""))
//                          .setViewName(filename);
//
//                        logger.debug("Adding '" + filename + "' template");
//                    }
//                }
//            }
//        } catch (IOException e) {
//            logger.error("Can't load templates", e);
//        }

        registry
                .addViewController("/login")
                .setViewName("login");
        registry
                .addViewController("/")
                .setViewName("index");
        registry
                .addViewController("/constructor/test_designer")
                .setViewName("constructor/test_designer");
        registry
                .addViewController("/constructor/text_designer")
                .setViewName("constructor/text_designer");
        registry
                .addViewController("/reset")
                .setViewName("reset");
        registry
                .addViewController("/reset_success")
                .setViewName("reset_success");
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

        registry
                .addResourceHandler(uploadPathMask + "/**")
                .addResourceLocations("file://" + uploadPath + "/");
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
