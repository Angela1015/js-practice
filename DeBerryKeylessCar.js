//determine age of driver to allow permission to drive

let age = Number(prompt("What is your age?"));

function checkDriverAge(age){
    if
(Number(age) < 18) {
            alert("Sorry, you are too young to drive this car. Powering off");
}
else if (Number(age) > 18) {
            alert("Powering On. Enjoy the ride!");
}
else if (Number(age) === 18) {
            alert("Congratulations on your first year of driving. Enjoy the ride!");
}
}
