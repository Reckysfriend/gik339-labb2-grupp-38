
//-------------------- Uppgift 4 Skapa Variabler ---------------

const checkbox = document.getElementById("divSTyle")
const textfield = document.getElementsByClassName("textfield")
const button = document.querySelector("button")
const divElement = document.getElementsByName("div")

//-------------------- Uppgift 5 Skapa en fördefinierad funktion ---------------
function eventReader(e){
    console.log("Target: " + e.target) 

    if(e.target.name === "content"){
        console.log(e.target.value)
        divElement[0].innerHTML = e.target.value
    }
}

//-------------------- Uppgift 6 Koppla eventlyssnare ---------------

button.addEventListener("click", () => {divElement[0].remove()})
checkbox.onchange = changeDivColor;

function addEventReader(t){
    for (let i = 0; i < t.length; i++) {
        t.item(i).oninput = eventReader;
    }
}

function changeDivColor(e){
    checkboxStatus = e.target.checked
    if(checkboxStatus){
    divElement[0].style.background = textfield[0].value;
    }
    else{
    divElement[0].style.background = "white"
    }      
}

addEventReader(textfield)