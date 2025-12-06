const boardDiv = document.getElementById('board');
const newGameButton = document.getElementById('new-game');
const solveButton = document.getElementById('solve');

// For now, hardcoded sample puzzles
const puzzlesList = [
    {
        id: 0,
        given: [
            [5,3,0,0,7,0,0,0,0],
            [6,0,0,1,9,5,0,0,0],
            [0,9,8,0,0,0,0,6,0],
            [8,0,0,0,6,0,0,0,3],
            [4,0,0,8,0,3,0,0,1],
            [7,0,0,0,2,0,0,0,6],
            [0,6,0,0,0,0,2,8,0],
            [0,0,0,4,1,9,0,0,5],
            [0,0,0,0,8,0,0,7,9]
        ],
        solution: [
            [5,3,4,6,7,8,9,1,2],
            [6,7,2,1,9,5,3,4,8],
            [1,9,8,3,4,2,5,6,7],
            [8,5,9,7,6,1,4,2,3],
            [4,2,6,8,5,3,7,9,1],
            [7,1,3,9,2,4,8,5,6],
            [9,6,1,5,3,7,2,8,4],
            [2,8,7,4,1,9,6,3,5],
            [3,4,5,2,8,6,1,7,9]
        ]
    }
];

// Mutable board
let originalPuzzle = puzzlesList[0].given;
let solution = puzzlesList[0].solution;
let puzzle = originalPuzzle.map(row => [...row]);

let selectedCell = null;

// Draw the board
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

            cell.addEventListener('click', () => selectCell(cell));

            boardDiv.appendChild(cell);
        }
    }
}

// Select a cell
function selectCell(cell) {
    if (selectedCell) selectedCell.classList.remove('selected');
    if (!cell.classList.contains('prefilled')) {
        selectedCell = cell;
        cell.classList.add('selected');
    }
}

// Keyboard input
document.addEventListener('keydown', (e) => {
    if (!selectedCell) return;

    const row = parseInt(selectedCell.dataset.row);
    const col = parseInt(selectedCell.dataset.col);

    if (e.key >= '1' && e.key <= '9') {
        selectedCell.textContent = e.key;
        puzzle[row][col] = parseInt(e.key);
    } else if (e.key === 'Backspace' || e.key === 'Delete') {
        selectedCell.textContent = '';
        puzzle[row][col] = 0;
    } else if (['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.key)) {
        let newRow = row;
        let newCol = col;
        switch(e.key) {
            case 'ArrowUp': newRow = (row + 8) % 9; break;
            case 'ArrowDown': newRow = (row + 1) % 9; break;
            case 'ArrowLeft': newCol = (col + 8) % 9; break;
            case 'ArrowRight': newCol = (col + 1) % 9; break;
        }
        const nextCell = Array.from(boardDiv.children).find(c =>
            parseInt(c.dataset.row) === newRow && parseInt(c.dataset.col) === newCol
        );
        if (nextCell) selectCell(nextCell);
        e.preventDefault();
    }
});

// New Game button
newGameButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * puzzlesList.length);
    originalPuzzle = puzzlesList[randomIndex].given;
    solution = puzzlesList[randomIndex].solution;
    puzzle = originalPuzzle.map(row => [...row]);
    selectedCell = null;
    drawBoard(puzzle);
});

// Solve button
solveButton.addEventListener('click', () => drawBoard(solution));

// Initial render
drawBoard(puzzle);
