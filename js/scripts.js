// When the player has entered the name and clicked on the buttan "Lägg till spelare",
// the input field for the name, should be hidden, and the name of the human player, score 
// and play buttons should be displayed.

let computerPlayerName = 'Datorn';
let computerPlayerChoiceNum = Math.floor( ((Math.random())*3)+1 ) ;
let computerPlayerChoice = '';
let computerPlayerScore = '';

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

let humanPlayerScore = '';
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

// Check who has won
if (computerPlayerChoice === humanPlayerChoice) {
  displayPlayerScore();
  document.getElementById("roundWinner").innerHTML = 'Dator valde samma som människan. Spela igen!';
  }
else if ( (computerPlayerChoice==='rock' && humanPlayerChoice==='sissor') || 
          (computerPlayerChoice ='paper' && humanPlayerChoice==='rock') || 
          (computerPlayerChoice ='sissor' && humanPlayerChoice==='paper') ) {
  computerPlayerScore++;
  displayPlayerScore();
  document.getElementById("roundWinner").innerHTML = 'Datorn'; // Visa rundans vinnare
}
else{
  humanPlayerScore++;
  displayPlayerScore();
  document.getElementById("roundWinner").innerHTML = 'Dig'; // Visa rundans vinnare
}


// Efter att spelare har vunnit en runda, så kolla om spelaren har vunnit 3 gånger. Om detta
// är tilfället, så har spelaren vunnit spelet.

// Om en spelare har vunnit spelet, så visas vinnaren

// I samband med att vinnaren av spelet visas, så visas knappen "Spela igen" och funktionen playAgain utför - playAgain();

function displayPlayerScore() {
  document.getElementById("computerPlayerScoreId").innerHTML = computerPlayerScore;
  document.getElementById("humanPlayerScoreId").innerHTML = humanPlayerScore;  
}

function playAgain(){
  let computerPlayerChoiceNum = Math.floor( ((Math.random())*3)+1 ) ;    
  let computerPlayerScore = 0;
  let humanPlayerScore = 0;
}