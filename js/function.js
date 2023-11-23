// Nummerering av val:
// Rock - playerChoiceNum = 1
// Paper - playerChoiceNum = 2
// Sissor - playerChoiceNum = 3

// Möjliga resultat:
// Rock - Rock -> Nytt spel
// Paper - Paper -> Nytt spel
// Sissor - Sissor -> Nytt spel
// Rock slår sissor
// Paper slår rock
// Sissor slår paper

let humanPlayerChoice = 0;

let computerPlayerScore = 0;
let humanPlayerScore = 0;

// console.log(computerPlayerChoice);

const formEl = document.querySelector('form');

formEl.addEventListener('submit', (event)=>{
    const messageEl = document.querySelector('h2');

    event.preventDefault(); // Vad gör detta?
    numberOfGuesses++;

    const guess = formEl.querySelector('input').value;

    if(computerPlayerChoice == humanPlayerChoice){
        messageEl.innerText = `Du gissade rätt! Det tog dig ${numberOfGuesses} gissningar.`;
        resetGame();
    }
    else if(guess < randomNumber){
        messageEl.innerText = 'Du gissade för lågt';
    }
    else if(guess > randomNumber){
        messageEl.innerText = 'Du gissade för högt';
    }

    formEl.reset();
})

function resetGame(){
    randomNumber = Math.floor( Math.random()*101 ) ;
    numberOfGuesses = 0;
    // console.log(randomNumber);
}