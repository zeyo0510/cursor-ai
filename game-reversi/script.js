const board = document.getElementById('board');
const statusDisplay = document.getElementById('status');
const resetButton = document.getElementById('reset');

let currentPlayer = 'black';
let gameBoard = Array(8).fill().map(() => Array(8).fill(null));

// Initialize the board with starting pieces
function initializeBoard() {
    gameBoard[3][3] = 'white';
    gameBoard[3][4] = 'black';
    gameBoard[4][3] = 'black';
    gameBoard[4][4] = 'white';
    renderBoard();
}

// Render the board based on the game state
function renderBoard() {
    board.innerHTML = '';
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.addEventListener('click', handleCellClick);

            if (gameBoard[i][j]) {
                const piece = document.createElement('div');
                piece.classList.add('piece', gameBoard[i][j]);
                cell.appendChild(piece);
            }

            board.appendChild(cell);
        }
    }
    statusDisplay.textContent = `Current Player: ${currentPlayer === 'black' ? 'Black' : 'White'}`;
}

// Handle cell click event
function handleCellClick(event) {
    const row = parseInt(event.target.dataset.row);
    const col = parseInt(event.target.dataset.col);

    if (gameBoard[row][col] !== null) return; // Cell is already occupied

    // Place the piece and flip opponent's pieces (simplified logic for now)
    gameBoard[row][col] = currentPlayer;
    currentPlayer = currentPlayer === 'black' ? 'white' : 'black';
    renderBoard();
}

// Reset the game
resetButton.addEventListener('click', () => {
    gameBoard = Array(8).fill().map(() => Array(8).fill(null));
    currentPlayer = 'black';
    initializeBoard();
});

// Start the game
initializeBoard(); 