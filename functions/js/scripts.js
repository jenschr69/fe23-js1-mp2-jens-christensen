function logMessage {
    console.log ('This is a message.')
}

logMessage();

function createWelcomeMessage () {
  const h1El = document.createElement ('h1');
  h1El.innerText = 'Welcome!';

  document.body.appendChild(h1E1);
}

createWelcomeMessage();

for (let i=0; i<10; i++) {
  createWelcomeMessage();
}

console.log(logMessage); // Loggar datan i logMessage alltså funktionen
console.log(logMessage());


/* Argument */
function hej (namn) {
  console.log('Hej, {$namn}!')
}