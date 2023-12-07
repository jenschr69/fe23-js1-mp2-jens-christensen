// Test code display scoreboard
let computerPlayerName = 'Datorn';
let computerPlayerScore = '1';

let humanPlayerName = 'Clara';
let humanPlayerScore = '10';


// Send score data to the screen before any rounds have been played
displayScoreBoard();

function displayScoreBoard() {
  // Displaying player names to scoreboard
  document.getElementById("computerPlayerName").innerHTML = computerPlayerName;
  document.getElementById("humanPlayerName").innerHTML = humanPlayerName;  
  // Displaying scores to scoreboard
  document.getElementById("computerPlayerScoreId").innerHTML = computerPlayerScore;
  document.getElementById("humanPlayerScoreId").innerHTML = humanPlayerScore;  
}