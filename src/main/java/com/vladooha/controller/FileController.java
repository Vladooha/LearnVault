package com.vladooha.controller;

import com.vladooha.service.FileService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.security.Principal;

@Controller
public class FileController {
    private static final Logger logger = LogManager.getLogger(FileController.class);

    @Autowired
    private FileService fileService;

    @PostMapping("/ajax/upload")
    @ResponseBody
    public String uploadFile(
            @RequestParam("file") MultipartFile multipartFile,
            Principal principal) throws IOException {
        logger.debug("/upload");

        if (principal != null) {
            String filename = fileService.saveFile(multipartFile);

            logger.debug("Returning filename: " + filename);

            return filename;
        }

        return null;
    }
}
