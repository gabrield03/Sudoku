package com.gabriel.sudoku.controllers;

import com.gabriel.sudoku.service.SolveService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class SolveController {

    private final SolveService solveService;

    public SolveController(SolveService solveService) {
        this.solveService = solveService;
    }

    @PostMapping("/solve")
    public int[][] solve(@RequestBody int[][] board) {
        return solveService.solveBoard(board);
    }
}
