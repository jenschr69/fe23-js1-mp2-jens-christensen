// Når spelaren har skrivit in sitt namn och klickat på knappen "Lägg till spelare",
// så skall input fältet för namn döljas och namn på spelarna, score och knappar visas - Opacity = 100%.

let computerPlayerChoiceNum = Math.floor( Math.random()*3 ) ;
let computerPlayerChoice = '';

if(computerPlayerChoiceNum == 1) {
    computerPlayerChoice = 'rock';
}
else if (computerPlayerChoiceNum == 2){
    computerPlayerChoice = 'paper';
}
else if (computerPlayerChoiceNum == 3){
    computerPlayerChoice = 'sissor';
}

console.log (computerPlayerChoice);

