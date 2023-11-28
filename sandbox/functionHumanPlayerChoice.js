// Registrera vilken knapp spelaren har klickat på

// Ta emot input från männsklig spelare
// 1. Ta emot human player namn

let humanPlayerChoice = ''; 

// onClick event tar emot input från användare om vilket val spelaren har tagit - vilken av dom 
// tre knapparne har man klickat på

function humanPlayerChoiceRock() {
  document.getElementById("humanPlayerChoice").innerHTML = 'Rock';
  humanPlayerChoice = 'rock';
}

function humanPlayerChoiceSissor() {
  document.getElementById("humanPlayerChoice").innerHTML = 'Sissor';
  humanPlayerChoice = 'sissor';
}

function humanPlayerChoicePaper() {
    document.getElementById("humanPlayerChoice").innerHTML = 'Påse';
    humanPlayerChoice ='paper';
}


// Visa på skärmen vilken knapp spelaren har klickat på