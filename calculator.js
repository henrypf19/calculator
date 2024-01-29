let screen=document.querySelector(".screen");
let bt=document.querySelectorAll(".btn");

bt.forEach(boton =>{
    boton.addEventListener("click",()=>{
        const clk=boton.textContent;
        if(screen.textContent==="0"){
            screen.textContent=clk;
        }
        else{
            screen.textContent+=clk;
        }
    })
})