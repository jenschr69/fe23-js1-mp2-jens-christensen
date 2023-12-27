// Testscript for determin round winner and display winner
let computerPlayerScore = 0;
let humanPlayerScore = 0;
let computerPlayerChoice = 'rock';
let humanPlayerChoice = 'sissor';

// Skriver ut hårdkodade val
document.getElementById("computer-round-play").innerHTML = 'Rock';
document.getElementById("human-round-play").innerHTML = 'Sissor';

// Jämnföra input från dator spelar och männsklig spelare och avgöra vem som vann

if (computerPlayerChoice === humanPlayerChoice) {
  document.getElementById("roundWinner").innerHTML = 'Dator valde samma som människan. Spela igen!';
  }
else if ( (computerPlayerChoice==='rock' && humanPlayerChoice==='sissor') || 
          (computerPlayerChoice ==='paper' && humanPlayerChoice==='rock') || 
          (computerPlayerChoice === 'sissor' && humanPlayerChoice==='paper') ) {
  document.getElementById("round-winner").innerHTML = 'Datorn vann denna rundan!';
  computerPlayerScore++;
}
else{
  document.getElementById("round-winner").innerHTML = 'Människan vann denna rundan!';
  humanPlayerScore++;
}