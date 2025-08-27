// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
let caja1 = document.createElement("div");
document.body.appendChild(caja1);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let caja2 = document.createElement("div");
let parrafo = document.createElement("p");
parrafo.innerText = "Esto es un párrafo del ejercicio 2.2";
caja2.appendChild(parrafo);
document.body.appendChild(caja2);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
let caja3 = document.createElement("div");
for(let i=0; i<6; i++){
    let parrafo2 = document.createElement("p");
    parrafo2.textContent = `Parrafo ${i+1}`;
    caja3.appendChild(parrafo2);
}
document.body.appendChild(caja3);

// 2.4 Inserta dinamicamente con javascript en un html una p con el	texto 'Soy dinámico!'.
let parrafo3 = document.createElement("p");
parrafo3.textContent = "Soy dinámico!";
document.body.appendChild(parrafo3);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let titulo_h2 = document.querySelector(".fn-insert-here");
titulo_h2.textContent = "Wubba Lubba dub dub";

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
let lista = document.createElement("ul");
for(let app of apps){
    let network = document.createElement("li");
    network.textContent = app;
    lista.appendChild(network);
}
document.body.appendChild(lista);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
let clases = document.querySelectorAll(".fn-remove-me");
for(let clase of clases){
    clase.classList.remove("fn-remove-me");
    clase.remove();
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
let cajas = document.querySelectorAll("div");
let box1 = cajas[0];
let box2 = cajas[1];
cajas[0].insertAdjacentHTML("afterend","<p>Voy en medio!</p>")

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
let cajas2 = document.querySelectorAll("div.fn-insert-here");

for(let caja2 of cajas2){
    let p1 = document.createElement("p");
    p1.textContent = "Voy dentro!";
    caja2.appendChild(p1);
}



