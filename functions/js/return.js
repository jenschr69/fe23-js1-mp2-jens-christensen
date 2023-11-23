// Return statement

function mult(x, y){
    return x*y;
}

mult(10, 7);

console.log(mult(10,7));

const result = mult(34,234);
console.log(result);

function getElement (text) {
    const el = document.createElement('h1');
    el.innerText = text;

    return el;
}

document.body.appendChild(getElement('Er det lunch snart?'));

const newElement = getElement('Er det lunch snart?')
document.body.appendChild( newElement );


function createArray(el1, el2, el3){
    return [el1, el2, el3];
}

const newArr = createArray(3,6,9);
console.log(newArr);