package com.gabriel.sudoku.service;

import com.gabriel.sudoku.model.SudokuPuzzle;
import com.gabriel.sudoku.utils.JsonUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
public class PuzzleService {

    private final Random random = new Random();

    public SudokuPuzzle getRandomPuzzle(String difficulty) {
        String path = "/puzzles/" + difficulty + "/" +
                capitalize(difficulty) + "Puzzles.json";

        List<SudokuPuzzle> puzzles =
                JsonUtils.readJson(path, List.class);

        int index = random.nextInt(puzzles.size());
        return JsonUtils.readJson(path, SudokuPuzzle[].class)[index];
    }

    private String capitalize(String s) {
        return Character.toUpperCase(s.charAt(0)) + s.substring(1);
    }
}
