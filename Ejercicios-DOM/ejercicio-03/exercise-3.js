// 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let lista = document.createElement("ul");

for(let country of countries){
    let item = document.createElement("li");
    item.textContent = country;
    lista.appendChild(item);
}

document.body.appendChild(lista);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
let eliminar = document.querySelector(".fn-remove-me");
eliminar.remove();

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let listCars = document.createElement("ul");
let contenedor = document.querySelector('div[data-function="printHere"]');

for(let car of cars){
    let item2 = document.createElement("li");
    item2.textContent = car;
    listCars.appendChild(item2);
}

contenedor.appendChild(listCars);

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.

//Renombro 'countries' como 'countries2' para evitar conflicto, ya que 'countries' esta declarada en el ejercicio 1.1
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for(let country2 of countries2 ){
    //Creamos las etiquetas:
    let caja = document.createElement("div");
    let titulo2 = document.createElement("h4");
    let imagen = document.createElement("img");

    //Les asignamos un valor:
    titulo2.textContent = country2.title;
    imagen.src = country2.imgUrl;

    //Insertamos los títulos y las imágenes en el document:    
    caja.appendChild(titulo2);
    caja.appendChild(imagen);
    document.body.appendChild(caja); 
}


// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
let boton = document.createElement("button");
boton.textContent = "Eliminar último div";
boton.addEventListener("click", function(){
    //Captura todas las etiquetas 'div' del 'body' y borra la última:
    let cajas = document.querySelectorAll("body > div");
    if(cajas.length>0){
        cajas[cajas.length-1].remove();
    }else{
        //Si no hubiera más etiquetas 'div' en el 'body', muéstralo por consola:
        console.log("No hay más etiquetas div en la web");
    }
});
document.body.appendChild(boton);

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
let cajas = document.querySelectorAll("body > div");
for(let caja of cajas){
    //Creamos un botón de eliminar para cada 'div':
    let botonEliminar = document.createElement("button");
    //Le añadimos texto a cada botón:
    botonEliminar.textContent = "Eliminar div";
    //Metemos cada botón en su respectivo 'div':
    caja.appendChild(botonEliminar);
    //Al pulsar un botón se eliminará su 'div' correspondiente:
    botonEliminar.addEventListener("click", function(){
        caja.remove();
    });
}
