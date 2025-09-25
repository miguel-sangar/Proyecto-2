//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
let boton = document.createElement("button");
boton.id = "btnToClick";
boton.textContent = "Info";
boton.addEventListener("click",function(event){
    console.log(event);
});
document.body.appendChild(boton);

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
let foco = document.querySelector(".focus");
foco.addEventListener("focus",function(){
    console.log(foco.value);
});

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
let getInput = document.querySelector(".value");
getInput.addEventListener("input",function(){
    console.log(getInput.value);
});