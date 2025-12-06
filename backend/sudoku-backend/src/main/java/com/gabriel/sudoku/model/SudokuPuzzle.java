package com.gabriel.sudoku.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class SudokuPuzzle {
    
    private int id;
    private int[][] givenBoard;
    private int[][] solvedBoard;
}
