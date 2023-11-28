const form = document.querySelector('form');

form.addEventListener('submit', (event)=>{
    event.preventDefault();

    const text = document.querySelector('#humanPlayerId').value;
    document.querySelector('#humanPlayerName').innerText = text;

    form.reset();
})