// When the player has entered the name and clicked on the button "Lägg till spelare",
// the input field for the name, should be hidden, and the scoreboard, score 
// and play buttons should be displayed.

// Receive input from human player - Human player enters name
humanPlayersPlay();
let humanPlayerName = '';
let humanPlayerScore = 0;

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const text = document.querySelector('#human-player-id').value;
  document.querySelector('#human-player-name').innerText = text;

  form.reset();
  // Hide human-input-name form
  hideHumanPlayerNameForm();
})

let computerPlayerName = 'Datorn';
let computerPlayerScore = 0;

displayScoreBoard();
  // computerPlayersPlay();
  // displayRoundWinner();

let computerPlayerChoice = '';

// Functions used for the game

// Hide input field for entering human player name when name has been entered
function hideHumanPlayerNameForm() {
  document.getElementById("input-form-human-name").classList.add("input-human-player-form-hide");
}

// Display ScoreBoard by removing the class "score-board-visibility-none"
function displayScoreBoard() {
  document.getElementById("score-board-id").classList.remove("score-board-visiblity-none");
  document.getElementById("human-player-name").innerText = (humanPlayerName);
  document.getElementById("human-player-score-id").innerText = (humanPlayerScore);
  let computerPlayerName = 'Datorn';
  document.getElementById("computer-player-name").innerText = (computerPlayerName);
  document.getElementById("computer-player-score-id").innerText = (computerPlayerScore);
}

