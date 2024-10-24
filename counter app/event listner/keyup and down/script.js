let container = document.getElementById("cointainer");
let display = document.getElementById("display");

document.addEventListener("keydown", function(e){
    display.style.color = "red";
    display.innerText = e.key + " is a keyDown";
});

document.addEventListener("keyup", function(e){
    display.style.color = "tomato";
    display.innerText = e.key + " is a KeyUp";
} );
