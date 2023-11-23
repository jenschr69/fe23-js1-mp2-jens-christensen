function logAllArgs(){
    console.log(arguments);

    for(const arg of arguments) {
        console.log (arg);
    }
}

logAllArgs(4, 346, 3, 756, 324);
logAllArgs('text', true, 34);

// definiera en funktion utan parametrar
// anropa de med så många argument du vill
// varje argument skall vare ett html-element
// for varje argument skall ett html-elemment skapas med innerText"Element nummer" +indexNumret i argumments