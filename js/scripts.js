// Når spelaren har skrivit in sitt namn och klickat på knappen "Lägg till spelare",
// så skall input fältet för namn döljas och namn på spelarna, score och knappar visas - Opacity = 100%.

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

// console.log(computerPlayerChoiceNum);
// console.log(computerPlayerChoice);

// Ta emot input från männsklig spelare
// 1. Ta emot human player namn
let humanPlayerName = '';

const form = document.querySelector('form');

form.addEventListener('submit', (event)=>{
    event.preventDefault();

    const text = document.querySelector('#humanPlayerId').value;
    document.querySelector('#humanPlayerName').innerText = text;

    form.reset();
})

let humanPlayerScore = 0;
let humanPlayerChoice = ''; 

// onClick event tar emot input från användare om vilket val spelaren har tagit - vilken av dom 
// tre knapparne har man klickat på
const button = document.querySelectorAll('button');

button.addEventListener('click', (event)=>{
  event.preventDefault();

  const text = document.querySelector('#humanPlayerChoice').value;
  document.querySelector('#humanPlayerChoice').innerText = text;

  humanPlayerChoice = text;
})

// Efter att spelare har vunnit en runda, så kolla om spelaren har vunnit 3 gånger. Om detta
// är tilfället, så har spelaren vunnit spelet.

// Om en spelare har vunnit spelet, så visas vinnaren

// I samband med att vinnaren av spelet visas, så visas knappen "Spela igen" och funktionen newGame utförs functionen newGame();

function newGame(){
  let computerPlayerChoiceNum = Math.floor( ((Math.random())*3)+1 ) ;    
  let computerPlayerScore = 0;
  let humanPlayerScore = 0;
}