// When the player has entered the name and clicked on the button "Lägg till spelare",
// the input field for the name, should be hidden, and the scoreboard, score 
// and play buttons should be displayed.

// Receive input from human player - Human player enters name
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


let computerPlayerScore = 0;
let computerPlayerChoice = '';

displayScoreBoard();

// computerPlayersPlay();

// humanPlayersPlay();

// If Computer Players Score are less than 3 and Human Players Score are less the 3 > Continue playing




// Functions used for the game

// Hide input field for entering human player name when name has been entered
function hideHumanPlayerNameForm() {
  document.getElementById("input-form-human-name").classList.add("input-human-player-form-hide");
}

// Display Human Player Name
function displayHumanPlayerName() {
  document.getElementById("human-player-name").innerText = (humanPlayerName);
}

function displayHumanPlayerScore() {
  document.getElementById("human-player-score-id").innerText = (humanPlayerScore);
}

function displayComputerPlayerName() {
  let computerPlayerName = 'Datorn';
  document.getElementById("computer-player-name").innerText = (computerPlayerName);
}

function displayComputerPlayerScore() {
  document.getElementById("computer-player-score-id").innerText = (computerPlayerScore);
}

// Display ScoreBoard by removing the class "score-board-visibility-none"
function displayScoreBoard() {
  document.getElementById("score-board-id").classList.remove("score-board-visiblity-none");
  hideHumanPlayerNameForm();
  displayHumanPlayerName();
  displayHumanPlayerScore();
  displayComputerPlayerName();
  displayComputerPlayerScore();
}


// Randomizing Computers Play - Adding it as a string value to Computer Players Choice variable
function computerPlayersPlay() {
  let computerPlayerChoiceNum = Math.floor(((Math.random()) * 3) + 1);

  if (computerPlayerChoiceNum == 1) {
    computerPlayerChoice = 'rock';
  }
  else if (computerPlayerChoiceNum == 2) {
    computerPlayerChoice = 'paper';
  }
  else if (computerPlayerChoiceNum == 3) {
    computerPlayerChoice = 'sissor';
  }
}

function displayNewGameButton() {
  /* This id is to be enabled when one player has won the game
#newGameButton { display: block; }*/
}

// Choice to select when the same player wants to play again - keeping existing humanPlayerName
function newGame() {

}

// Choice to select when a new player wants to play - erasing the value of the humanPlayerName variable
function resetGame() {

}