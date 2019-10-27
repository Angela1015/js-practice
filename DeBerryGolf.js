/* Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

Strokes	Return
1	"Hole-in-one!"
<= par - 2	"Eagle"
par - 1	"Birdie"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!"
par and strokes will always be numeric and positive. */

golfScore=(par,strokes)=>{
    if(strokes===1){
        console.log("Hole-in-one");
    }else if(strokes<=(par-2)){
        console.log("Eagle");
    }else if(strokes===(par-1)){
        console.log("Birdie");
    }else if(strokes===par){
        console.log("Par");
    }else if(strokes===(par+1)){
        console.log("Bogey");
    }else if(strokes===(par+2)){
        console.log("Double Bogey");

    }else{
        console.log("Go Home")
    }
    }
