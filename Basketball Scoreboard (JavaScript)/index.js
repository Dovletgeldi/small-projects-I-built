let scoreHomeEl = document.getElementById("score-home");
let scoreGuestEl = document.getElementById("score-guest");

function resetHome() {
  scoreHomeEl.textContent = 0;
}

function add1Home() {
  let currentScore = parseInt(scoreHomeEl.textContent, 10);
  currentScore += 1;
  scoreHomeEl.textContent = currentScore;
}

function add2Home() {
  let currentScore = parseInt(scoreHomeEl.textContent, 10);
  currentScore += 2;
  scoreHomeEl.textContent = currentScore;
}

function add3Home() {
  let currentScore = parseInt(scoreHomeEl.textContent, 10);
  currentScore += 3;
  scoreHomeEl.textContent = currentScore;
}

function subtract1Home() {
  let currentScore = parseInt(scoreHomeEl.textContent, 10);
  if (currentScore > 0) {
    currentScore -= 1;
  }
  scoreHomeEl.textContent = currentScore;
}

function subtract2Home() {
  let currentScore = parseInt(scoreHomeEl.textContent, 10);
  if (currentScore > 1) {
    currentScore -= 2;
  }
  scoreHomeEl.textContent = currentScore;
}

function subtract3Home() {
  let currentScore = parseInt(scoreHomeEl.textContent, 10);
  if (currentScore > 2) {
    currentScore -= 3;
  }
  scoreHomeEl.textContent = currentScore;
}

function resetGuest() {
  scoreGuestEl.textContent = 0;
}

function add1Guest() {
  let currentScore = parseInt(scoreGuestEl.textContent, 10);
  currentScore += 1;
  scoreGuestEl.textContent = currentScore;
}

function add2Guest() {
  let currentScore = parseInt(scoreGuestEl.textContent, 10);
  currentScore += 2;
  scoreGuestEl.textContent = currentScore;
}

function add3Guest() {
  let currentScore = parseInt(scoreGuestEl.textContent, 10);
  currentScore += 3;
  scoreGuestEl.textContent = currentScore;
}

function subtract1Guest() {
  let currentScore = parseInt(scoreGuestEl.textContent, 10);
  if (currentScore > 0) {
    currentScore -= 1;
  }
  scoreGuestEl.textContent = currentScore;
}

function subtract2Guest() {
  let currentScore = parseInt(scoreGuestEl.textContent, 10);
  if (currentScore > 1) {
    currentScore -= 2;
  }
  scoreGuestEl.textContent = currentScore;
}

function subtract3Guest() {
  let currentScore = parseInt(scoreGuestEl.textContent, 10);
  if (currentScore > 2) {
    currentScore -= 3;
  }
  scoreGuestEl.textContent = currentScore;
}
