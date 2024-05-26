// Receive human players name
let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let humanplayername = document.getElementById("humanplayername");

    if (username.value == "") {
        alert("Ensure you input a value in both fields!");
    } else {
        // perform operation with form input
        alert("This form has been successfully submitted!");
        console.log(
            `This form has a username of ${humanplayername.value}`
        );

        humanplayername.value = "";

        document.getElementById("humanPlayerName").innerHTML = humanplayername.value;
    }
});

document.getElementById("humanPlayerName").innerHTML = humanPlayerName;

// Register click on form button with eventlistener
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_addeventlistener_displaydate

// When received, hide input form
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_visibility

// Register human players choice

// Evaluate input

// New game