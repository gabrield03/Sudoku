const boardDiv = document.getElementById("board");
const newGameButton = document.getElementById("new-game");
const solveButton = document.getElementById("solve");
const checkBoardButton = document.getElementById("check-board");
const difficultySelect = document.getElementById("difficulty");
const timerDisplay = document.getElementById("timer");
const mistakesDisplay = document.getElementById("mistakes");
const statusDisplay = document.getElementById("status");
const numberPad = document.getElementById("number-pad");
const eraseButton = document.getElementById("erase");
const notesToggleButton = document.getElementById("notes-toggle");
const themeToggleButton = document.getElementById("theme-toggle");

const puzzlesByDifficulty = {
    easy: [
        {
            given: [
                [0, 0, 0, 2, 6, 0, 7, 0, 1],
                [6, 8, 0, 0, 7, 0, 0, 9, 0],
                [1, 9, 0, 0, 0, 4, 5, 0, 0],
                [8, 2, 0, 1, 0, 0, 0, 4, 0],
                [0, 0, 4, 6, 0, 2, 9, 0, 0],
                [0, 5, 0, 0, 0, 3, 0, 2, 8],
                [0, 0, 9, 3, 0, 0, 0, 7, 4],
                [0, 4, 0, 0, 5, 0, 0, 3, 6],
                [7, 0, 3, 0, 1, 8, 0, 0, 0]
            ],
            solution: [
                [5, 3, 4, 6, 7, 8, 9, 1, 2],
                [6, 7, 2, 1, 9, 5, 3, 4, 8],
                [1, 9, 8, 3, 4, 2, 5, 6, 7],
                [8, 5, 9, 7, 6, 1, 4, 2, 3],
                [4, 2, 6, 8, 5, 3, 7, 9, 1],
                [7, 1, 3, 9, 2, 4, 8, 5, 6],
                [9, 6, 1, 5, 3, 7, 2, 8, 4],
                [2, 8, 7, 4, 1, 9, 6, 3, 5],
                [3, 4, 5, 2, 8, 6, 1, 7, 9]
            ]
        }
    ],    
    medium: [
        {
            given: [
                [5, 3, 0, 0, 7, 0, 0, 0, 0],
                [6, 0, 0, 1, 9, 5, 0, 0, 0],
                [0, 9, 8, 0, 0, 0, 0, 6, 0],
                [8, 0, 0, 0, 6, 0, 0, 0, 3],
                [4, 0, 0, 8, 0, 3, 0, 0, 1],
                [7, 0, 0, 0, 2, 0, 0, 0, 6],
                [0, 6, 0, 0, 0, 0, 2, 8, 0],
                [0, 0, 0, 4, 1, 9, 0, 0, 5],
                [0, 0, 0, 0, 8, 0, 0, 7, 9]
            ],
            solution: [
                [5, 3, 4, 6, 7, 8, 9, 1, 2],
                [6, 7, 2, 1, 9, 5, 3, 4, 8],
                [1, 9, 8, 3, 4, 2, 5, 6, 7],
                [8, 5, 9, 7, 6, 1, 4, 2, 3],
                [4, 2, 6, 8, 5, 3, 7, 9, 1],
                [7, 1, 3, 9, 2, 4, 8, 5, 6],
                [9, 6, 1, 5, 3, 7, 2, 8, 4],
                [2, 8, 7, 4, 1, 9, 6, 3, 5],
                [3, 4, 5, 2, 8, 6, 1, 7, 9]
            ]
        }
    ],
    hard: [
        {
            given: [
                [0, 0, 0, 6, 0, 0, 4, 0, 0],
                [7, 0, 0, 0, 0, 3, 6, 0, 0],
                [0, 0, 0, 0, 9, 1, 0, 8, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 5, 0, 1, 8, 0, 0, 0, 3],
                [0, 0, 0, 3, 0, 6, 0, 4, 5],
                [0, 4, 0, 2, 0, 0, 0, 6, 0],
                [9, 0, 3, 0, 0, 0, 0, 0, 0],
                [0, 2, 0, 0, 0, 0, 1, 0, 0]
            ],
            solution: [
                [5, 8, 1, 6, 7, 2, 4, 3, 9],
                [7, 9, 2, 8, 4, 3, 6, 5, 1],
                [3, 6, 4, 5, 9, 1, 7, 8, 2],
                [4, 3, 8, 9, 5, 7, 2, 1, 6],
                [2, 5, 6, 1, 8, 4, 9, 7, 3],
                [1, 7, 9, 3, 2, 6, 8, 4, 5],
                [8, 4, 5, 2, 1, 9, 3, 6, 7],
                [9, 1, 3, 7, 6, 8, 5, 2, 4],
                [6, 2, 7, 4, 3, 5, 1, 9, 8]
            ]
        }
    ],
    expert: [
        {
            given: [
                [0, 0, 5, 3, 0, 0, 0, 0, 0],
                [8, 0, 0, 0, 0, 0, 0, 2, 0],
                [0, 7, 0, 0, 1, 0, 5, 0, 0],
                [4, 0, 0, 0, 0, 5, 3, 0, 0],
                [0, 1, 0, 0, 7, 0, 0, 0, 6],
                [0, 0, 3, 2, 0, 0, 0, 8, 0],
                [0, 6, 0, 5, 0, 0, 0, 0, 9],
                [0, 0, 4, 0, 0, 0, 0, 3, 0],
                [0, 0, 0, 0, 0, 9, 7, 0, 0]
            ],
            solution: [
                [1, 4, 5, 3, 2, 7, 6, 9, 8],
                [8, 3, 9, 6, 5, 4, 1, 2, 7],
                [6, 7, 2, 9, 1, 8, 5, 4, 3],
                [4, 9, 6, 1, 8, 5, 3, 7, 2],
                [2, 1, 8, 4, 7, 3, 9, 5, 6],
                [7, 5, 3, 2, 9, 6, 4, 8, 1],
                [3, 6, 7, 5, 4, 2, 8, 1, 9],
                [9, 8, 4, 7, 6, 1, 2, 3, 5],
                [5, 2, 1, 8, 3, 9, 7, 6, 4]
            ]
        }
    ]
};

let originalPuzzle = [];
let solution = [];
let board = [];
let selectedRow = null;
let selectedCol = null;
let mistakes = 0;
let timerInterval = null;
let secondsElapsed = 0;
let gameOver = false;
let notes = [];
let notesMode = false;

function cloneGrid(grid) {
    return grid.map(row => [...row]);
}

function startNewGame() {
    const difficulty = difficultySelect.value;
    const puzzleList = puzzlesByDifficulty[difficulty];
    const selectedPuzzle = puzzleList[Math.floor(Math.random() * puzzleList.length)];

    originalPuzzle = cloneGrid(selectedPuzzle.given);
    solution = cloneGrid(selectedPuzzle.solution);
    board = cloneGrid(selectedPuzzle.given);

    notes = createEmptyNotesGrid();
    notesMode = false;
    notesToggleButton.classList.remove("active");
    notesToggleButton.textContent = "Notes Off";

    selectedRow = null;
    selectedCol = null;
    mistakes = 0;
    gameOver = false;

    mistakesDisplay.textContent = mistakes;
    setStatus("Select a cell and enter a number.");
    resetTimer();
    drawBoard();
    updateNumberPad();
}

function drawBoard() {
    boardDiv.innerHTML = "";

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const cell = document.createElement("button");
            cell.type = "button";
            cell.className = "cell";
            cell.dataset.row = row;
            cell.dataset.col = col;
            cell.setAttribute("aria-label", `Row ${row + 1}, Column ${col + 1}`);

            if (col === 2 || col === 5) {
                cell.classList.add("box-right");
            }

            if (row === 2 || row === 5) {
                cell.classList.add("box-bottom");
            }

            if (originalPuzzle[row][col] !== 0) {
                cell.classList.add("prefilled");
            }

            const value = board[row][col];

            if (value !== 0) {
                cell.textContent = value;
            } else if (notes[row][col].size > 0) {
                renderNotes(cell, row, col);
            }

            cell.addEventListener("click", () => selectCell(row, col));
            boardDiv.appendChild(cell);
        }
    }

    updateHighlights();
}

function selectCell(row, col) {
    selectedRow = row;
    selectedCol = col;
    updateHighlights();
}

function updateHighlights() {
    const cells = boardDiv.querySelectorAll(".cell");

    cells.forEach(cell => {
        cell.classList.remove("selected", "related", "same-number", "wrong");

        const row = Number(cell.dataset.row);
        const col = Number(cell.dataset.col);
        const value = board[row][col];

        if (selectedRow === null || selectedCol === null) {
            return;
        }

        const selectedValue = board[selectedRow][selectedCol];
        const sameRow = row === selectedRow;
        const sameCol = col === selectedCol;
        const sameBox =
            Math.floor(row / 3) === Math.floor(selectedRow / 3) &&
            Math.floor(col / 3) === Math.floor(selectedCol / 3);

        if (sameRow || sameCol || sameBox) {
            cell.classList.add("related");
        }

        if (selectedValue !== 0 && value === selectedValue) {
            cell.classList.add("same-number");
        }

        if (row === selectedRow && col === selectedCol) {
            cell.classList.add("selected");
        }

        if (value !== 0 && value !== solution[row][col]) {
            cell.classList.add("wrong");
        }
    });
}

function placeNumber(value) {
    if (gameOver || selectedRow === null || selectedCol === null) {
        return;
    }

    if (notesMode && value !== 0) {
        toggleNote(value);
        return;
    }

    if (originalPuzzle[selectedRow][selectedCol] !== 0) {
        setStatus("That number is part of the original puzzle.", "error");
        return;
    }

    const previousValue = board[selectedRow][selectedCol];
    board[selectedRow][selectedCol] = value;
    notes[selectedRow][selectedCol].clear();

    if (value === 0) {
        setStatus("Cell cleared.");
    } else if (value !== solution[selectedRow][selectedCol]) {
        if (previousValue !== value) {
            mistakes++;
            mistakesDisplay.textContent = mistakes;
        }

        setStatus("That number does not fit there.", "error");
    } else {
        setStatus("Nice, that number is correct.");
    }

    drawBoard();
    updateNumberPad();
    checkWin();
}

function eraseSelectedCell() {
    placeNumber(0);
}

function checkBoard() {
    let hasEmptyCell = false;
    let hasWrongCell = false;

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === 0) {
                hasEmptyCell = true;
            } else if (board[row][col] !== solution[row][col]) {
                hasWrongCell = true;
            }
        }
    }

    drawBoard();

    if (hasWrongCell) {
        setStatus("There are still incorrect numbers on the board.", "error");
    } else if (hasEmptyCell) {
        setStatus("No mistakes found so far.");
    } else {
        finishGame();
    }
}

function solveBoard() {
    board = cloneGrid(solution);
    notes = createEmptyNotesGrid();
    gameOver = true;
    stopTimer();
    selectedRow = null;
    selectedCol = null;
    drawBoard();
    updateNumberPad();
    setStatus("Solved board shown.", "success");
}

function checkWin() {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] !== solution[row][col]) {
                return;
            }
        }
    }

    finishGame();
}

function finishGame() {
    gameOver = true;
    stopTimer();
    selectedRow = null;
    selectedCol = null;
    drawBoard();
    setStatus(`Puzzle completed in ${formatTime(secondsElapsed)} with ${mistakes} mistake${mistakes === 1 ? "" : "s"}.`, "success");
}

function createNumberPad() {
    numberPad.innerHTML = "";

    for (let value = 1; value <= 9; value++) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "number-button";
        button.textContent = value;
        button.dataset.value = value;
        button.addEventListener("click", () => placeNumber(value));
        numberPad.appendChild(button);
    }
}

function updateNumberPad() {
    const counts = new Map();

    for (let value = 1; value <= 9; value++) {
        counts.set(value, 0);
    }

    for (const row of board) {
        for (const value of row) {
            if (value !== 0) {
                counts.set(value, counts.get(value) + 1);
            }
        }
    }

    const buttons = numberPad.querySelectorAll(".number-button");
    buttons.forEach(button => {
        const value = Number(button.dataset.value);
        button.classList.toggle("complete", counts.get(value) >= 9);
    });
}

function handleKeyDown(event) {
    if (event.key >= "1" && event.key <= "9") {
        placeNumber(Number(event.key));
        return;
    }

    if (event.key === "Backspace" || event.key === "Delete" || event.key === "0") {
        eraseSelectedCell();
        return;
    }

    if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
        return;
    }

    event.preventDefault();

    if (selectedRow === null || selectedCol === null) {
        selectCell(0, 0);
        return;
    }

    let nextRow = selectedRow;
    let nextCol = selectedCol;

    if (event.key === "ArrowUp") nextRow = (selectedRow + 8) % 9;
    if (event.key === "ArrowDown") nextRow = (selectedRow + 1) % 9;
    if (event.key === "ArrowLeft") nextCol = (selectedCol + 8) % 9;
    if (event.key === "ArrowRight") nextCol = (selectedCol + 1) % 9;

    selectCell(nextRow, nextCol);
}

function resetTimer() {
    stopTimer();
    secondsElapsed = 0;
    timerDisplay.textContent = "00:00";
    timerInterval = setInterval(() => {
        secondsElapsed++;
        timerDisplay.textContent = formatTime(secondsElapsed);
    }, 1000);
}

function stopTimer() {
    if (timerInterval !== null) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function setStatus(message, type = "") {
    statusDisplay.textContent = message;
    statusDisplay.className = "status";

    if (type) {
        statusDisplay.classList.add(type);
    }
}

function createEmptyNotesGrid() {
    return Array.from({ length: 9 }, () =>
        Array.from({ length: 9 }, () => new Set())
    );
}

function renderNotes(cell, row, col) {
    const grid = document.createElement("div");
    grid.className = "notes-grid";

    for (let value = 1; value <= 9; value++) {
        const note = document.createElement("span");
        note.textContent = notes[row][col].has(value) ? value : "";
        grid.appendChild(note);
    }

    cell.appendChild(grid);
}

function toggleNotesMode() {
    notesMode = !notesMode;
    notesToggleButton.classList.toggle("active", notesMode);
    notesToggleButton.textContent = notesMode ? "Notes On" : "Notes Off";
    setStatus(notesMode ? "Notes mode is on." : "Notes mode is off.");
}

function toggleNote(value) {
    if (gameOver || selectedRow === null || selectedCol === null) {
        return;
    }

    if (originalPuzzle[selectedRow][selectedCol] !== 0) {
        setStatus("You cannot add notes to an original puzzle cell.", "error");
        return;
    }

    if (board[selectedRow][selectedCol] !== 0) {
        setStatus("Clear the cell before adding notes.", "error");
        return;
    }

    const cellNotes = notes[selectedRow][selectedCol];

    if (cellNotes.has(value)) {
        cellNotes.delete(value);
    } else {
        cellNotes.add(value);
    }

    drawBoard();
    setStatus(`Toggled note ${value}.`);
}

function toggleTheme() {
    const isDark = document.body.classList.toggle("dark-theme");
    themeToggleButton.textContent = isDark ? "Light Mode" : "Dark Mode";
    localStorage.setItem("sudoku-theme", isDark ? "dark" : "light");
}

function loadSavedTheme() {
    const savedTheme = localStorage.getItem("sudoku-theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        themeToggleButton.textContent = "Light Mode";
    } else {
        themeToggleButton.textContent = "Dark Mode";
    }
}

newGameButton.addEventListener("click", startNewGame);
solveButton.addEventListener("click", solveBoard);
checkBoardButton.addEventListener("click", checkBoard);
eraseButton.addEventListener("click", eraseSelectedCell);
notesToggleButton.addEventListener("click", toggleNotesMode);
themeToggleButton.addEventListener("click", toggleTheme);
document.addEventListener("keydown", handleKeyDown);

loadSavedTheme();
createNumberPad();
startNewGame();