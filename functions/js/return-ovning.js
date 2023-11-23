// En funktion som tar emot hur många positiva nummerargument som helst och returnerera det høgsta numret

function getHighestNum() {
    let highest = 0;
    
    for(const arg of arguments) {
        if(arg > highest) highest = arg;

        console.log('arg', arg, 'highest, highest');
    }

    return highest;
}

let high = getHighestNum(0,1,2,3,4,5);
console.log(high);