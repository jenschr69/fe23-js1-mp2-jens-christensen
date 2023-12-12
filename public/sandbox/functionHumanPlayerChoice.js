// Receive input from human player

let humanPlayerChoice = ''; 

// addEventListener receives the input from the human player regarding human players choice
// which of the three buttons that has been clicked

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