//let squareNumber = document.getElementById("square-input").value
squareButton.addEventListener("click",squareNumber)
halfButton.addEventListener("click",halfNumber)
percentButton.addEventListener("click",percentOf)
areaButton.addEventListener("click",areaOf)
solution.addEventListener("click",displayResults)

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

function displayResults(){
    let sqNumber =document.getElementById("squareinput").value;
    numberSquare =(sqNumber)*(sqNumber);
    console.log("The result of squaring the number " +sqNumber+" is "+numberSquare);
    const hfNumber = document.getElementById("halfinput").value;
    const half = hfNumber/2;
    console.log("Half of " +hfNumber+ " is " +half);

    const numerator = document.getElementById("percent1input").value;
    const denominator = document.getElementById("percent2input").value;
    const percent =(numerator/denominator)*100;
    console.log( numerator +" is " +percent+"% of " + denominator);

    const radius = document.getElementById("areainput").value;
    const pi =Math.PI
    let area = pi*(radius*radius);
    area =area.toFixed(2);
    console.log("The are of a circle with a radius of "+radius+" is " +area)

    let para = document.createElement('p');
    para.innerHTML= "The result of squaring the number " +sqNumber+" is "+numberSquare;
    let divadd = document.getElementById("solution")
    divadd.appendChild(para)

    let para2 =document.createElement("p")
    para2.innerHTML= "Half of " +hfNumber+ " is " +half
    let divadd2 =document.getElementById("solution")
    divadd2.appendChild(para2)

    let para3 =document.createElement("p")
    para3.innerHTML= numerator +" is " +percent+"% of " + denominator
    let divadd3 =document.getElementById("solution")
    divadd3.appendChild(para3)

    let para4 =document.createElement("p")
    para4.innerHTML= "The are of a circle with a radius of "+radius+" is " +area
    let divadd4 =document.getElementById("solution")
    divadd4.appendChild(para4)

}


    

