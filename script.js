var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var rand = document.getElementById("random");
var copy = document.getElementById("copy-btn");
function setGradient(){
    body.style.background=
        "linear-gradient(to right, " 
        + color1.value
        + ", "
        + color2.value
        + ")";
        css.textContent = body.style.background+";";
}



function asignRandColor(){

    var randColor1 = '#' + (function co(lor){   return (lor +=
        [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
        && (lor.length == 6) ?  lor : co(lor); })('');
    
    var randColor2 = '#' + (function co(lor){   return (lor +=
            [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
            && (lor.length == 6) ?  lor : co(lor); })('');
    
    color1.value = randColor1;
    color2.value = randColor2;
}

function copiar() {
    /* Get the text field */
    var copyText = document.querySelector("h3");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }
  


window.onload=setGradient;


rand.addEventListener("click",asignRandColor);
rand.addEventListener("click",setGradient);

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

copy.addEventListener("click",copiar);

