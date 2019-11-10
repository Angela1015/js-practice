
const para = document.createElement("p");
para.innerHTML="Hey I'm red";
document.body.appendChild(para);
para.style="color:red"

const h3= document.createElement("h3");
h3.innerHTML="I'm a blue h3!";
document.body.appendChild(h3);
h3.style="color:blue";


const div2 = document.createElement("div")
div2.style.backgroundColor = "pink";

const h1 = document.createElement("h1")
h1.innerHTML="I'm a div"
const para2= document.createElement("p")
para2.innerHTML="ME TOO"

div2.appendChild(h1)
div2.appendChild(para2)
document.body.appendChild(div2)

