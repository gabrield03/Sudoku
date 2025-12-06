package com.gabriel.sudoku.controllers;

import com.gabriel.sudoku.model.SudokuPuzzle;
import com.gabriel.sudoku.service.PuzzleService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class NewGameController {

    private final PuzzleService puzzleService;

    public NewGameController(PuzzleService puzzleService) {
        this.puzzleService = puzzleService;
    }

    @GetMapping("/newGame")
    public SudokuPuzzle newGame(@RequestParam String difficulty) {
        return puzzleService.getRandomPuzzle(difficulty);
    }
}
