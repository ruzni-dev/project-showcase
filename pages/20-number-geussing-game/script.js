// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Set max attempts
let attempts = 10;

// Function to check user's guess
function checkGuess() {
  const userGuess = parseInt(document.getElementById('userGuess').value);
  const feedback = document.getElementById('feedback');
  const attemptsDisplay = document.getElementById('attempts');

  // Validate input
  if (!userGuess || userGuess < 1 || userGuess > 100) {
    feedback.textContent = 'Please enter a number between 1 and 100.';
    return;
  }

  // Check if guess is correct
  if (userGuess === randomNumber) {
    feedback.textContent = 'Congratulations! You guessed the correct number!';
    document.getElementById('restart').style.display = 'block';
  } else {
    // Decrease attempts
    attempts--;
    if (attempts > 0) {
      feedback.textContent = userGuess > randomNumber ? 'Too high! Try again.' : 'Too low! Try again.';
      attemptsDisplay.textContent = `Attempts Left: ${attempts}`;
    } else {
      // Game over
      feedback.textContent = `Game Over. The correct number was ${randomNumber}.`;
      attemptsDisplay.textContent = 'Attempts Left: 0';
      document.getElementById('restart').style.display = 'block';
    }
  }

  // Clear input
  document.getElementById('userGuess').value = '';
}

// Restart the game
function restartGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 10;
  document.getElementById('feedback').textContent = 'Start guessing...';
  document.getElementById('attempts').textContent = 'Attempts Left: 10';
  document.getElementById('restart').style.display = 'none';
}