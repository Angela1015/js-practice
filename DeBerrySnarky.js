let favNumber = parseFloat(prompt("What is your favorite number?"));
if(favNumber===42){
    alert("Yay! That's my favorite too!");
}else if(favNumber<42){
    alert(`"Eh, that's OK but ${favNumber +1} would be even better"` );
}
else{
    alert("LAME. That number is too large!");
}