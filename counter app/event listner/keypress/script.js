let inputbox = document.getElementById("input-box");
let display = document.getElementById("display");

inputbox.addEventListener('keypress',function(e){
    display.innerText = "you have pressed " + e.key
})
