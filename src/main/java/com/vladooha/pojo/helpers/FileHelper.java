package com.vladooha.pojo.helpers;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.lang.Nullable;

import java.io.*;

public class FileHelper {
    private static final Logger logger = LogManager.getLogger(FileHelper.class);

    public static boolean writeToFile(String path, String data) {
        File file = new File(path);
        try (FileWriter fileWriter = new FileWriter(file)) {
            file.mkdirs();
            fileWriter.write(data);

            logger.debug("Created new file '" + path + "'");

            return true;
        } catch (IOException e) {
            logger.error("Can't save file '" + path + "'", e);

            return false;
        }
    }

    @Nullable
    public static String readFromFile(String path) {
        File file = new File(path);
        StringBuilder stringBuilder = new StringBuilder();
        String buff;
        try (BufferedReader fileReader = new BufferedReader(new FileReader(file))) {
            while ((buff = fileReader.readLine()) != null) {
                stringBuilder.append(buff);
            }

            return stringBuilder.toString();
        } catch (IOException e) {
            logger.error("Can't read file '" + path + "'", e);

            return null;
        }
    }

    public static boolean makeIfNotExists(String path) {
        File courseDir = new File(path);
        if (!courseDir.exists()) {
            try {
                courseDir.mkdirs();
                courseDir.createNewFile();

                return true;
            } catch (IOException e) {
                logger.error("Can't create file '" + path + "'", e);

                return false;
            }
        } else {
            return true;
        }
    }
}
