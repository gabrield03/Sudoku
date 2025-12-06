package com.gabriel.sudoku.utils;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.InputStream;

public class JsonUtils {

    private static final ObjectMapper mapper = new ObjectMapper();

    public static <T> T readJson(String path, Class<T> type) {
        try {
            InputStream input = JsonUtils.class.getResourceAsStream(path);
            return mapper.readValue(input, type);
        } catch (Exception e) {
            throw new RuntimeException("Error reading JSON: " + path, e);
        }
    }
}
