package com.gabriel.sudoku.service;

import com.gabriel.sudoku.model.SudokuPuzzle;
import com.gabriel.sudoku.model.MoveRequest;
import com.gabriel.sudoku.validator.MoveValidator;
import org.springframework.stereotype.Service;

@Service
public class ValidationService {

    public boolean validateMove(SudokuPuzzle puzzle, MoveRequest req) {
        return MoveValidator.isValid(
                puzzle.getSolvedBoard(),
                req.row,
                req.col,
                req.value
        );
    }
}
