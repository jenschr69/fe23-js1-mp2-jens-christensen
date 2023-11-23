// Når spelaren har skrivit in sitt namn och klickat på knappen "Lägg till spelare",
// så skall input fältet för namn döljas och namn på spelarna, score och knappar visas - Opacity = 100%.

let computerPlayerChoiceNum = Math.floor( ((Math.random())*3)+1 ) ;
let computerPlayerChoice = '';
let computerPlayerScore = 0;
let humanPlayerPlayerScore = 0;

if(computerPlayerChoiceNum == 1) {
  computerPlayerChoice = 'rock';
}
else if (computerPlayerChoiceNum == 2){
  computerPlayerChoice = 'paper';
}
else if (computerPlayerChoiceNum == 3){
  computerPlayerChoice = 'sissor';
}

console.log(computerPlayerChoiceNum);
console.log(computerPlayerChoice);

// Ta emot input från männsklig spelare

let humanPlayerName = '';
let humanPlayerChoice =''; // Får ett värde rock, paper eller sissor

// onClick event tar emot input från användare om vilket val spelaren har tagit

// Jämnföra input från dator spelar och männsklig spelare och avgöra vem som vann

// Når en spelare har vunnit en runda, så får denna spelaren 1 poeng

// Efter att spelare har vunnit en runda, så kolla om spelaren har vunnit 3 gånger. Om detta
// är tilfället, så har spelaren vunnit spelet.