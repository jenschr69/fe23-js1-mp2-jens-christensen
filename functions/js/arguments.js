function logHi (fNamn, eNamn) {
    console.log('Hi, ${fNamn} ${eNamn}');
    console.log('fNamn', fNamn);
    console.log('eNamn', eNamn);
}

logHi('Filip', 'Leivas');
logHi('Nick', 'Cage')

// Lägg till en parameter som ska användas till elementets innerText

function createElement (typeOfEl) {
    const el = document.createElement(typeOfEl);
    document.body.appendChild(el);

    el.innerText = 'Sålänge';
}

createElement('h1', 'Hej');
createElement('p', 'Lorem ipsum');

function createElement (typeOfEl, text) {
    const el = document.createElement(typeOfEl);
    document.body.appendChild(el);

    el.innerText = text;
}

createElement('h1', 'Hej');
createElement('p', 'Lorem ipsum');

function createElement (typeOfEl, text, color='hotpink') {
    const el = document.createElement(typeOfEl);
    document.body.appendChild(el);

    el.innerText = text;
    el.style.color = color;
}

createElement('h1', 'Hej');
createElement('p', 'Lorem ipsum', 'skyblue');