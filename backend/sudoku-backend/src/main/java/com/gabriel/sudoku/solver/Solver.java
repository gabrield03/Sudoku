package com.gabriel.sudoku.solver;

public class Solver {
    
    public static boolean solve(int[][] board) {
        // TODO: implement real solver
        return true;
    }




    // Solve with backtracking
    /**
     * Solves a given (starting) board with backtracking
     * Note:
     *    Time Complexity: O(9 ^(n + n))
     *    Space Complexity: O(1)
     * 
     * @param boardGiven 2D unsolved Sudoku board
     * @return 2D solved Sudoku board
     */
    public static int[][] solveWithBackTracking(int[][] boardGiven) {
        int[][] boardSolved = new int[9][9];

        for (int r = 0; r < 9; r++) {
            for (int c = 0; c < 9; c++) {
                boardSolved[r][c] = boardGiven[r][c];
            }
        }

        solver(boardSolved);

        return boardSolved;
    }

    private static void solver(int[][] board) {
        solveRecursively(board, 0, 0);
    }

    private static boolean solveRecursively(int[][] board, int row, int col) {

        if (row == 8 && col == 9) return true;

        if (col == 9) {
            row++;
            col = 0;
        }

        if (board[row][col] != 0) return solveRecursively(board, row, col + 1);

        for (int num = 1; num <= 9; num++) {
            if (isValidPlacement(board, row, col, num)) {
                board[row][col] = num;

                if (solveRecursively(board, row, col + 1)) return true;

                board[row][col] = 0;
            }
        }

        return false;
    }

    private static boolean isValidPlacement(int[][] board, int row, int col, int num) {
        for (int n = 0; n < 9; n++) {
            if (board[row][n] == num || board[n][col] == num) return false;
        }

        int startRow = row - (row % 3);
        int startCol = col - (col % 3);
        for (int r = 0; r < 3; r++) {
            for (int c = 0; c < 3; c++) {
                if (board[r + startRow][c + startCol] == num) return false;
            }
        }

        return true;
    }
}
