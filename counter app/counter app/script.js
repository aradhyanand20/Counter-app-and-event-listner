const decbtn = document.getElementById("dbtn");
const incbtn = document.getElementById("ibtn");
const resetbtn = document.getElementById("rbtn");
const display_value = document.getElementById("disvalue");

decbtn.addEventListener('click', () =>{
    const value = Number(display_value.innerText);
    if(value>0){
      display_value.innerText = value -1;  
    }
    else{
        alert("It's a negative value!")
    }
});

incbtn.addEventListener('click', ()=>{
    const value = Number(display_value.innerText);
    if(value>=10){
        alert("Number bigger then 10s are not allowed")
    }
    else{
        display_value.innerText = value +1;
    }
});

resetbtn.addEventListener('click', ()=>{
    display_value.innerText = 0;
});
