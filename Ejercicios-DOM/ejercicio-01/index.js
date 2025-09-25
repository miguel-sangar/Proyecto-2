// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
let botonShowMe = document.querySelector(".showme");
console.log(botonShowMe);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
let pillado = document.querySelector("#pillado");
console.log(pillado);

// 1.3 Usa querySelector para mostrar por consola todos los p
let parrafos = document.querySelectorAll("p");
console.log(parrafos);

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
let pokemons = document.querySelectorAll(".pokemon");
console.log(pokemons);

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
let data = document.querySelectorAll('[data-function="testMe"]');
console.log(data);

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
let data2 = document.querySelectorAll('[data-function="testMe"]');
console.log(data2[2].textContent);