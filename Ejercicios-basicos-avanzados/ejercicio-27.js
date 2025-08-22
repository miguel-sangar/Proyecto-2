// Utiliza un bucle para encontrar la serie de dibujos animados más antigua en el array y guarda su nombre en una variable. Imprime el nombre por consola.

const cartoons = [
  { name: 'Bugs Bunny', debut: 1938 },
  { name: 'SpongeBob SquarePants', debut: 1999 },
  { name: 'Tom and Jerry', debut: 1940 },
  { name: 'Mickey Mouse', debut: 1928 },
  { name: 'Scooby-Doo', debut: 1969 },
  { name: 'The Flintstones', debut: 1960 },
  { name: 'Batman: The Animated Series', debut: 1992 },
  { name: 'The Simpsons', debut: 1989 },
  { name: 'Pokémon', debut: 1997 },
  { name: "Dexter's Laboratory", debut: 1996 }
];

//Inicializamos variables de apoyo:
let nombre = null;
let debut = Infinity;

//Recorremos el array "cartoons". Si el nuevo elemento del array tiene un debut inferior al anterior, guardamos el nombre y el año en nuestras variables de apoyo:
for(const cartoon of cartoons){
    if(cartoon.debut<debut){
        nombre = cartoon.name;
        debut = cartoon.debut;
    }
}

//Imprimir por pantalla la serie de dibujos más antigua:
console.log(`La serie de dibujos animados más antigua del array es: ${nombre}`);
