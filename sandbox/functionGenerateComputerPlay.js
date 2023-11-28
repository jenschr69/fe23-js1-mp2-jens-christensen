// Generate Computer Choice
// 1. Create random number
let computerPlayerChoiceNum = Math.floor( ((Math.random())*3)+1 ) ;
let computerPlayerChoice = '';

// 2. Convert number value to string value for comparisment
if(computerPlayerChoiceNum == 1) {
  computerPlayerChoice = 'rock';
}
else if (computerPlayerChoiceNum == 2){
  computerPlayerChoice = 'paper';
}
else if (computerPlayerChoiceNum == 3){
  computerPlayerChoice = 'sissor';
}

// console.log(computerPlayerChoice);

// Display computer players play
document.getElementById("computerPlayerChoiceId").innerHTML = computerPlayerChoice;