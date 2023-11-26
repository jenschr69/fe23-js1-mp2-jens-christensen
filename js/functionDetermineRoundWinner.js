// Testscript för att kolla vem som vann rundan

let computerPlayerChoice = 'rock';
let humanPlayerChoice = 'sissor';

// Jämnföra input från dator spelar och männsklig spelare och avgöra vem som vann
if (computerPlayerChoice === humanPlayerChoice) {
    // Visa meddelnande: Spela igen (Gör inget)
  }
  
  else if ( (computerPlayerChoice==='rock' && humanPlayerChoice==='sissor') || 
            (computerPlayerChoice ='paper' && humanPlayerChoice==='rock') || 
            (computerPlayerChoice ='sissor' && humanPlayerChoice==='paper') ) {
    computerPlayerScore++;
    roundWinner = computerPlayer;
  }
  else{
    humanPlayerScore++;
    roundWinner=humanPlayer;
  }