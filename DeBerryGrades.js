let pointsPossible = 50;
let pointsMissed = prompt("How many points did you miss?");

let score = ((pointsPossible-pointsMissed)/pointsPossible)*100;
if(score >=70){
    console.log("Points missed:\n" + pointsMissed+" ,Score:"+score+"%" );
}
else{
    console.log("Points missed:\n" + pointsMissed+" ,Score:"+score+" %"+"ouch");
}
    