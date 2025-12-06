package com.gabriel.sudoku.service;

import com.gabriel.sudoku.solver.Solver;
import org.springframework.stereotype.Service;

@Service
public class SolveService {

    public int[][] solveBoard(int[][] board) {
        int[][] copy = deepCopy(board);
        Solver.solve(copy);
        return copy;
    }

    private int[][] deepCopy(int[][] src) {
        int[][] out = new int[9][9];
        for (int i = 0; i < 9; i++)
            System.arraycopy(src[i], 0, out[i], 0, 9);
        return out;
    }
}
