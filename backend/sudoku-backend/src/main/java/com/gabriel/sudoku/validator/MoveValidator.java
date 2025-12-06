package com.gabriel.sudoku.validator;

public class MoveValidator {

    public static boolean isValid(int[][] solution, int row, int col, int value) {
        return solution[row][col] == value;
    }
}
