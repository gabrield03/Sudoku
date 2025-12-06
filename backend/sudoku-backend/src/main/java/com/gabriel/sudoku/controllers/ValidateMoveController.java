package com.gabriel.sudoku.controllers;

import com.gabriel.sudoku.model.MoveRequest;
import com.gabriel.sudoku.model.SudokuPuzzle;
import com.gabriel.sudoku.service.PuzzleService;
import com.gabriel.sudoku.service.ValidationService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class ValidateMoveController {

    private final PuzzleService puzzleService;
    private final ValidationService validationService;

    public ValidateMoveController(PuzzleService puzzleService, ValidationService validationService) {
        this.puzzleService = puzzleService;
        this.validationService = validationService;
    }

    @PostMapping("/validateMove")
    public boolean validate(@RequestBody MoveRequest req) {
        SudokuPuzzle puzzle = puzzleService.getRandomPuzzle("easy");
        return validationService.validateMove(puzzle, req);
    }
}
