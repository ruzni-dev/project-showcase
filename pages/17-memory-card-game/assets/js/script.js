// DOM Elements
const gameBoard = document.getElementById('game-board');
const movesDisplay = document.getElementById('moves');
const timerDisplay = document.getElementById('timer');
const starsDisplay = document.getElementById('stars');
const winScreen = document.getElementById('win-screen');
const winTime = document.getElementById('win-time');
const winMoves = document.getElementById('win-moves');
const winRating = document.getElementById('win-rating');
const restartBtn = document.getElementById('restart-btn');
const playAgainBtn = document.getElementById('play-again-btn');
const progressBar = document.getElementById('progress');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeLabel = document.getElementById('theme-label');

// Game state
let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let moves = 0;
let timer = null;
let seconds = 0;
let starRating = 3;
let gameStarted = false;
const themeStorageKey = 'memory-game-theme';

// Card icons
const cardIcons = [
    'fa-heart', 'fa-star', 'fa-moon', 'fa-sun',
    'fa-cloud', 'fa-bolt', 'fa-snowflake', 'fa-gem',
    'fa-key', 'fa-flag', 'fa-bell', 'fa-music'
];

function getPreferredTheme() {
    const storedTheme = localStorage.getItem(themeStorageKey);
    if (storedTheme === 'light' || storedTheme === 'dark') {
        return storedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(themeStorageKey, theme);

    const isDark = theme === 'dark';
    themeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    themeLabel.textContent = isDark ? 'Light' : 'Dark';
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

// Initialize game
function initGame() {
    // Reset game state
    gameBoard.innerHTML = '';
    flippedCards = [];
    matchedPairs = 0;
    moves = 0;
    seconds = 0;
    starRating = 3;
    gameStarted = false;
    progressBar.style.width = '0%';

    // Reset displays
    movesDisplay.textContent = moves;
    timerDisplay.textContent = '00:00';
    starsDisplay.innerHTML = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>';

    // Create card deck (duplicate and shuffle)
    let deck = [];
    cardIcons.slice(0, 6).forEach(icon => {
        deck.push(icon);
        deck.push(icon);
    });

    // Shuffle deck
    deck = shuffleArray(deck);

    // Create cards
    deck.forEach((icon, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.icon = icon;
        card.dataset.index = index;

        card.innerHTML = `
            <div class="card-face card-back"></div>
            <div class="card-face card-front">
                <i class="fas ${icon}"></i>
            </div>
        `;

        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
        cards.push(card);
    });
}

// Shuffle array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Flip card function
function flipCard() {
    if (!gameStarted) {
        startTimer();
        gameStarted = true;
    }

    // Prevent flipping matched cards or when 2 are already flipped
    if (this.classList.contains('flipped') || flippedCards.length === 2) {
        return;
    }

    // Flip the card
    this.classList.add('flipped');
    flippedCards.push(this);

    // When two cards are flipped
    if (flippedCards.length === 2) {
        moves++;
        movesDisplay.textContent = moves;

        // Update progress bar
        progressBar.style.width = `${(matchedPairs / 6) * 100}%`;

        // Update star rating
        updateRating();

        // Check for match
        const isMatch = flippedCards[0].dataset.icon === flippedCards[1].dataset.icon;

        if (isMatch) {
            // Match found
            flippedCards[0].classList.add('match');
            flippedCards[1].classList.add('match');
            flippedCards = [];
            matchedPairs++;

            // Update progress bar
            progressBar.style.width = `${(matchedPairs / 6) * 100}%`;

            // Check for win
            if (matchedPairs === 6) {
                endGame();
            }
        } else {
            // No match - flip back after delay
            setTimeout(() => {
                flippedCards[0].classList.remove('flipped');
                flippedCards[1].classList.remove('flipped');
                flippedCards = [];
            }, 800);
        }
    }
}

// Start game timer
function startTimer() {
    timer = setInterval(() => {
        seconds++;
        const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        timerDisplay.textContent = `${minutes}:${secs}`;
    }, 1000);
}

// Update star rating based on moves
function updateRating() {
    if (moves === 15) {
        starRating = 2;
        starsDisplay.innerHTML = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star" style="opacity:0.3"></i>';
    } else if (moves === 25) {
        starRating = 1;
        starsDisplay.innerHTML = '<i class="fas fa-star"></i><i class="fas fa-star" style="opacity:0.3"></i><i class="fas fa-star" style="opacity:0.3"></i>';
    } else if (moves > 35) {
        starRating = 0;
        starsDisplay.innerHTML = '<i class="fas fa-star" style="opacity:0.3"></i><i class="fas fa-star" style="opacity:0.3"></i><i class="fas fa-star" style="opacity:0.3"></i>';
    }
}

// End game function
function endGame() {
    clearInterval(timer);
    progressBar.style.width = '100%';

    // Set win screen values
    winTime.textContent = timerDisplay.textContent;
    winMoves.textContent = moves;
    winRating.textContent = `${starRating}/3`;

    // Show win screen
    winScreen.classList.add('active');
}

// Restart game
function restartGame() {
    clearInterval(timer);
    winScreen.classList.remove('active');
    initGame();
}

// Event listeners
restartBtn.addEventListener('click', restartGame);
playAgainBtn.addEventListener('click', restartGame);
themeToggle.addEventListener('click', toggleTheme);

// Initialize game on load
applyTheme(getPreferredTheme());
document.addEventListener('DOMContentLoaded', initGame);