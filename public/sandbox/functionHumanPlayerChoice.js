// Registrera vilken knapp spelaren har klickat på

// Ta emot input från männsklig spelare
// 1. Ta emot human player namn

let humanPlayerChoice = ''; 

// onClick event tar emot input från användare om vilket val spelaren har tagit - vilken av dom 
// tre knapparne har man klickat på

document.getElementById("play-button-rock-id").addEventListener("click", humanPlayerChoiceRock);
document.getElementById("play-button-sissor-id").addEventListener("click", humanPlayerChoiceSissor);
document.getElementById("play-button-paper-id").addEventListener("click", humanPlayerChoicePaper);

function humanPlayerChoiceRock() {
  document.getElementById("human-player-choice").innerHTML = 'Rock';
  humanPlayerChoice = 'rock';
}

function humanPlayerChoiceSissor() {
  document.getElementById("human-player-choice").innerHTML = 'Sissor';
  humanPlayerChoice = 'sissor';
}

function humanPlayerChoicePaper() {
    document.getElementById("human-player-choice").innerHTML = 'Påse';
    humanPlayerChoice ='paper';
}


// Visa på skärmen vilken knapp spelaren har klickat på