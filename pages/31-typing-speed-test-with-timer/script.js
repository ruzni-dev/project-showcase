const quotes = [
  "Programming is not about typing, it’s about thinking.",
  "Typing fast is useless if you can’t think fast.",
  "Every great developer you know got there by solving problems.",
  "Experience is the name everyone gives to their mistakes.",
  "Make it work, make it right, make it fast."
];

let timerInterval;
let remainingTime = 60;
let totalTime = 60;
let isPaused = false;

const quoteDisplay = document.getElementById("quote-display");
const quoteInput = document.getElementById("quote-input");
const timer = document.getElementById("timer");
const wpmDisplay = document.getElementById("wpm");
const durationSelect = document.getElementById("duration");
const resultsBox = document.getElementById("results");

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function renderNewQuote() {
  const quote = getRandomQuote();
  quoteDisplay.textContent = quote;
  quoteInput.value = "";
  quoteInput.disabled = false;
  quoteInput.focus();
  resultsBox.style.display = "none";
}

function updateTimer() {
  if (!isPaused) {
    remainingTime--;
    timer.textContent = `Time: ${remainingTime}s`;

    const typedWords = quoteInput.value.trim().split(/\s+/).length;
    const minutesElapsed = (totalTime - remainingTime) / 60;
    const wpm = Math.round(typedWords / minutesElapsed || 0);
    wpmDisplay.textContent = `WPM: ${wpm}`;

    if (remainingTime <= 0) {
      stopTest(true);
    }
  }
}

function startTest() {
  totalTime = parseInt(durationSelect.value);
  remainingTime = totalTime;
  isPaused = false;

  timer.textContent = `Time: ${totalTime}s`;
  wpmDisplay.textContent = `WPM: 0`;
  renderNewQuote();

  clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 1000);
}

function pauseTest() {
  isPaused = true;
}

function resumeTest() {
  isPaused = false;
}

function stopTest(auto = false) {
  clearInterval(timerInterval);
  quoteInput.disabled = true;

  const typedText = quoteInput.value.trim();
  const wordCount = typedText.length > 0 ? typedText.split(/\s+/).length : 0;
  const charCount = typedText.length;
  const minutes = totalTime / 60;
  const wpm = Math.round(wordCount / minutes || 0);

  resultsBox.innerHTML = `
    <h2>Results Summary</h2>
    <p><strong>Time:</strong> ${totalTime} seconds</p>
    <p><strong>Words Typed:</strong> ${wordCount}</p>
    <p><strong>Characters Typed:</strong> ${charCount}</p>
    <p><strong>Words Per Minute (WPM):</strong> ${wpm}</p>
  `;
  resultsBox.style.display = "block";

  if (!auto) {
    alert("Test stopped.");
  }
}