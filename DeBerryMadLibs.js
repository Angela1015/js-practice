//const noun = document.getElementById("noun").value
/*const adjective = document.getElementById("adjective")
const name = document.getElementById("person")
const story = document.getElementById("story")*/

story.addEventListener("click",createStory)
    

function createStory(){
   const noun = document.getElementById("noun").value
   const adjective = document.getElementById("adjective").value
   const name = document.getElementById("person").value
    
    let para = document.createElement("p")
    para.innerHTML = noun+" "+adjective +" " +name
    document.body.appendChild(para)

}
