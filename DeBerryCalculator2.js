//let squareNumber = document.getElementById("square-input").value
squareButton.addEventListener("click",squareNumber)
halfButton.addEventListener("click",halfNumber)
percentButton.addEventListener("click",percentOf)
areaButton.addEventListener("click",areaOf)

function squareNumber(){
    let sqNumber =document.getElementById("squareinput").value;
    numberSquare =(sqNumber)*(sqNumber);
    console.log("The result of squaring the number " +sqNumber+" is "+numberSquare);


}
function halfNumber(){
    const hfNumber = document.getElementById("halfinput").value;
    const half = hfNumber/2;
    console.log("Half of " +hfNumber+ " is " +half);
}

function percentOf(){
    const numerator = document.getElementById("percent1input").value;
    const denominator = document.getElementById("percent2input").value;
    const percent =(numerator/denominator)*100;
    console.log( numerator +" is " +percent+"% of " + denominator);
}

function areaOf(){
    const radius = document.getElementById("areainput").value;
    const pi =Math.PI
    let area = pi*(radius*radius)
    area =area.toFixed(2)
    console.log("The are of a circle with a radius of "+radius+" is " +area)
}
