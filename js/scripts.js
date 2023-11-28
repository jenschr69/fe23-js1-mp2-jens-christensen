// When the player has entered the name and clicked on the button "Lägg till spelare",
// the input field for the name, should be hidden, and the scoreboard, score 
// and play buttons should be displayed.

// Receive input from human player - Human player enters name
let humanPlayerName = '';
let humanPlayerScore = 0;

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const text = document.querySelector('#humanPlayerId').value;
  document.querySelector('#humanPlayerName').innerText = text;
  humanPlayerName = text;
  form.reset();
  displayScoreBoard();
})

let computerPlayerName = 'Datorn';
let computerPlayerScore = 0;
let computerPlayerChoice = '';

computerPlayersPlay();

humanPlayersPlay();

// If Computer Players Score are less than 3 and Human Players Score are less the 3 > Continue playing

// Functions used for the game
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

// Display Scoreboard - Change visibility to "display: block;" when human player name has been submitted
// Class
function displayScoreBoard {
  // Add display: block; to class scoreBoardVisibility
}

function displayNewGameButton {
  /* This id is to be enabled when one player has won the game
#newGameButton { display: block; }*/
}