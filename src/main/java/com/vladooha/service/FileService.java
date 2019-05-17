package com.vladooha.service;

import com.vladooha.ServerApplication;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.system.ApplicationHome;
import org.springframework.context.annotation.Bean;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import java.io.File;
import java.io.IOException;
import java.util.UUID;

@Service
public class FileService {
    private String uploadPath;
    @Value("${upload.path.mask}")
    private String uploadPathMask;

    public FileService() {
        ApplicationHome home = new ApplicationHome(ServerApplication.class);
        File jarDir = home.getDir();
        uploadPath = jarDir.getAbsolutePath() + "/storage";

        File uploadDir = new File(uploadPath);
        if (!uploadDir.exists()) {
            uploadDir.mkdirs();
        }
    }

    @Nullable
    public String saveFile(MultipartFile multipartFile) throws IOException {
        if (multipartFile != null && new File(uploadPath).exists()) {
            String fileUUID  = UUID.randomUUID().toString();
            String filename = fileUUID + "_" + multipartFile.getOriginalFilename();
            String filepath = uploadPath + "/" + filename;

            multipartFile.transferTo(new File(filepath));

            return uploadPathMask + "/" + filename;
        }

        return null;
    }

    @Bean(name = "upload_path")
    public String getUploadPath() {
        return uploadPath;
    }

}
