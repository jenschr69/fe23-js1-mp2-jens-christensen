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


let computerPlayerScore = 0;
let computerPlayerChoice = '';

// While-loopen behævs inte eftersom allting måste hønda stegvis från det att anvøndaren har klickat på en knapp. 
// Påminnelse: Ta ett litet steg i taget, se till att det fungerar innan du går till nøsta
// while (computerPlayerScore < 3 || humanPlayerScore < 3) {
  displayScoreBoard();
  // computerPlayersPlay();
  // humanPlayersPlay();
  // displayRoundWinner();



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

// Determine human players play
function humanPlayersPlay() {
  document.getElementById("play-button-rock-id").addEventListener("click", humanPlayerChoiceRock);
  document.getElementById("play-button-sissor-id").addEventListener("click", humanPlayerChoiceSissor);
  document.getElementById("play-button-paper-id").addEventListener("click", humanPlayerChoicePaper);
}

function humanPlayerChoiceRock() {
  document.getElementById("humanPlayerChoice").innerHTML = 'Sten';
  humanPlayerChoice = 'rock';
  const compChoice = getComputerChoice();
  // jømfæra valen compareChoices();
  // tilldela poæng
  // ør poøngen mer øn tre
    // fortsøtta
    // starta om
}

function humanPlayerChoiceSissor() {
  document.getElementById("humanPlayerChoice").innerHTML = 'Sax';
  humanPlayerChoice = 'sissor';
  const compChoice = getComputerChoice();
  // jømfæra valen
  // tilldela poæng
  // ør poøngen mer øn tre
    // fortsøtta
    // starta om
}

function humanPlayerChoicePaper() {
    document.getElementById("humanPlayerChoice").innerHTML = 'Påse';
    humanPlayerChoice ='paper';
    const compChoice = getComputerChoice();
      // jømfæra valen
  // tilldela poæng
  // ør poøngen mer øn tre
    // fortsøtta
    // starta om
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

function getComputerChoice(){
  return 'rock';
}

// let a = 0;
// while(a<3){
//   console.log(a);
//   a++;
// }
// console.log('testar')