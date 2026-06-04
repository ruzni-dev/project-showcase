const cells = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const statusText = document.getElementById('statusText');
const restartBtn = document.getElementById('restartBtn');

let currentPlayer = 'X';
let gameActive = true;
let gameState = Array(9).fill("");

const winningCombinations = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

cells.forEach(cell => {
  cell.addEventListener('click', handleClick, { once: true });
});

restartBtn.addEventListener('click', restartGame);

function handleClick(e) {
  const cell = e.target;
  const index = [...cells].indexOf(cell);

  if (!gameActive || gameState[index] !== "") return;

  gameState[index] = currentPlayer;
  cell.textContent = currentPlayer;
  cell.classList.add(currentPlayer.toLowerCase());

  if (checkWin()) {
    statusText.textContent = `Player ${currentPlayer} Wins!`;
    statusText.className = currentPlayer === 'X' ? 'status-x' : 'status-o';
    gameActive = false;
  } else if (gameState.every(cell => cell !== "")) {
    statusText.textContent = "It's a Draw!";
    statusText.className = 'status-draw';
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusText.textContent = `Player ${currentPlayer}'s Turn`;
    statusText.className = currentPlayer === 'X' ? 'status-x' : 'status-o';
  }
}

function checkWin() {
  return winningCombinations.some(combination => {
    return combination.every(index => {
      return gameState[index] === currentPlayer;
    });
  });
}

function restartGame() {
  currentPlayer = 'X';
  gameActive = true;
  gameState = Array(9).fill("");
  statusText.textContent = `Player ${currentPlayer}'s Turn`;
  statusText.className = 'status-x';
  cells.forEach(cell => {
    cell.textContent = "";
    cell.classList.remove('x', 'o');
    cell.removeEventListener('click', handleClick);
    cell.addEventListener('click', handleClick, { once: true });
  });
}