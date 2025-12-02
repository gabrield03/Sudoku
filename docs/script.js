const boardDiv = document.getElementById('board');
const newGameButton = document.getElementById('new-game');
const solveButton = document.getElementById('solve');

// Sample puzzle, for now (0 is empty btw)
let originalPuzzle = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]
];

// mutable board
let puzzle = originalPuzzle.map(row => [...row]);

// Placeholder solution for testing (same size)
let solution = [
  [5,3,4,6,7,8,9,1,2],
  [6,7,2,1,9,5,3,4,8],
  [1,9,8,3,4,2,5,6,7],
  [8,5,9,7,6,1,4,2,3],
  [4,2,6,8,5,3,7,9,1],
  [7,1,3,9,2,4,8,5,6],
  [9,6,1,5,3,7,2,8,4],
  [2,8,7,4,1,9,6,3,5],
  [3,4,5,2,8,6,1,7,9]
];

// Currently selected cell
let selectedCell = null;


function drawBoard(board) {
    boardDiv.innerHTML = '';

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.row = row;
            cell.dataset.col = col;
            
            if (board[row][col] !== 0) {
                cell.textContent = board[row][col];
                cell.classList.add('prefilled');
            }
            boardDiv.appendChild(cell);

            cell.addEventListener('click', () => {
                if (!cell.classList.contains('prefilled')) {
                    if (selectedCell) {
                        selectedCell.classList.remove('selected');
                    }
                    selectedCell = cell;
                    cell.classList.add('selected');
                }
            });

            boardDiv.appendChild(cell);
        }
    }
}

// Keyboard input handling
document.addEventListener('keydown', (e) => {
    if (!selectedCell) return;

    let row = selectedCell.dataset.row;
    let col = selectedCell.dataset.col;

    if (e.key >= '1' && e.key <= '9') {
        selectedCell.textContent = e.key;
        puzzle[row][col] = parseInt(e.key);
    } else if (e.key === 'Backspace' || e.key === 'Delete') {
        selectedCell.textContent = '';
        puzzle[row][col] = 0;
    }
});

// Buttons
newGameButton.addEventListener('click', () => {
    // TODO, fetch new puzzle from backend
    puzzle = originalPuzzle.map(row => [...row]);
    drawBoard(puzzle);
    selectedCell = null;
});

solveButton.addEventListener('click', () => {
    drawBoard(solution);
});

// Initial render
drawBoard(puzzle);