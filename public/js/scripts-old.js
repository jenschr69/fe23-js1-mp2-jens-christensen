// When the player has entered the name and clicked on the buttan "Lägg till spelare",
// the input field for the name, should be hidden, and the name of the human player, score 
// and play buttons should be displayed.

let computerPlayerName = 'Datorn';
let computerPlayerChoiceNum = Math.floor( ((Math.random())*3)+1 ) ;
let computerPlayerChoice = '';
let computerPlayerScore = 0;

if(computerPlayerChoiceNum == 1) {
  computerPlayerChoice = 'rock';
}
else if (computerPlayerChoiceNum == 2){
  computerPlayerChoice = 'paper';
}
else if (computerPlayerChoiceNum == 3){
  computerPlayerChoice = 'sissor';
}

// Receive input from human player - Human player enters name
let humanPlayerName = '';

const form = document.querySelector('form');

form.addEventListener('submit', (event)=>{
    event.preventDefault();

    const text = document.querySelector('#humanPlayerId').value;
    document.querySelector('#humanPlayerName').innerText = text;

    form.reset();
})

let humanPlayerScore = 0;
displayScoreBoard();

let humanPlayerChoice = ''; 

// Send score data to the screen before any rounds have been played

displayPlayerScore();

// onClick event receives input from the human user to register human users choice from three buttons
function humanPlayerChoiceRock() {
  document.getElementById("humanPlayerChoice").innerHTML = 'Sten';
  humanPlayerChoice = 'rock';
}

function humanPlayerChoiceSissor() {
  document.getElementById("humanPlayerChoice").innerHTML = 'Sax';
  humanPlayerChoice = 'sissor';
}

function humanPlayerChoicePaper() {
    document.getElementById("humanPlayerChoice").innerHTML = 'Påse';
    humanPlayerChoice ='paper';
}



// After a player has won a round, check if the player has been winning 3 times - xxxxPlayerScore = 3
// If this is the case, the winner of the game is displayed.

// In connection to that the winner of the game is displayed, the button "Spela igen" should be
// displayed. When clicking on this button the function playAgain() should be executed. 



function displayScoreBoard() {
  // Displaying player names to scoreboard
  document.getElementById("computerPlayerName").innerHTML = computerPlayerName;
  document.getElementById("humanPlayerName").innerHTML = humanPlayerName;  
  // Displaying scores to scoreboard
  document.getElementById("computerPlayerScoreId").innerHTML = computerPlayerScore;
  document.getElementById("humanPlayerScoreId").innerHTML = humanPlayerScore;  
}

function playAgain(){
  let computerPlayerChoiceNum = Math.floor( ((Math.random())*3)+1 ) ;    
  let computerPlayerScore = 0;
  let humanPlayerScore = 0;
}