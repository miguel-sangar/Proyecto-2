// 1. Luke Skywalker cumple años:
const jedi = {nombre:"Luke Skywalker", edad: 19};
jedi.edad = 25;

// 2. Presentación al estilo Leia Organa:
let nombre = "Leia";
let apellido = "Organa";
let edad = 20;

console.log(`Soy ${nombre} ${apellido}, tengo ${edad} años y soy una princesa de Alderaan.`);

// 3. Calculando el coste total de sables de luz:
const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};
let sumaSables = sable1.precio + sable2.precio;
console.log(sumaSables);

// 4. Actualizando el precio final de las naves:
let precioBaseGlobal = 10000;
precioBaseGlobal = 25000;

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};
nave1.precioFinal = precioBaseGlobal + nave1.precioBase;
nave2.precioFinal = precioBaseGlobal + nave2.precioBase;
console.log(`Precio final nave 1: ${nave1.precioFinal}. Precio final nave 2: ${nave2.precioFinal}`);
