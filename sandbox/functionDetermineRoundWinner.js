// Testscript för att kolla vem som vann rundan
let computerPlayerScore = 0;
let humanPlayerScore = 0;
let computerPlayerChoice = 'paper';
let humanPlayerChoice = 'sissor';

// Skriver ut hårdkodade val
document.getElementById("computerPlayerChoice").innerHTML = 'Påse';
document.getElementById("humanPlayerChoice").innerHTML = 'Sissor';

// Jämnföra input från dator spelar och männsklig spelare och avgöra vem som vann

if (computerPlayerChoice === humanPlayerChoice) {
  document.getElementById("roundWinner").innerHTML = 'Dator valde samma som människan. Spela igen!';
  }
else if ( (computerPlayerChoice==='rock' && humanPlayerChoice==='sissor') || 
          (computerPlayerChoice ='paper' && humanPlayerChoice==='rock') || 
          (computerPlayerChoice ='sissor' && humanPlayerChoice==='paper') ) {
  document.getElementById("roundWinner").innerHTML = 'Datorn vann denna rundan!';
  computerPlayerScore++;
}
else{
  document.getElementById("roundWinner").innerHTML = 'Människan vann denna rundan!';
  humanPlayerScore++;
}

