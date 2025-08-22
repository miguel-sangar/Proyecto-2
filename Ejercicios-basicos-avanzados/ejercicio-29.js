// Agrupa las películas de Star Wars por década de lanzamiento en un objeto donde las claves son las décadas y los valores son arrays de películas. Utiliza bucles para lograrlo e imprime el objeto final por consola.

const starWarsMovies = [
  { title: 'A New Hope', releaseYear: 1977 },
  { title: 'The Empire Strikes Back', releaseYear: 1980 },
  { title: 'Return of the Jedi', releaseYear: 1983 },
  { title: 'The Phantom Menace', releaseYear: 1999 },
  { title: 'Attack of the Clones', releaseYear: 2002 },
  { title: 'Revenge of the Sith', releaseYear: 2005 },
  { title: 'The Force Awakens', releaseYear: 2015 },
  { title: 'The Last Jedi', releaseYear: 2017 },
  { title: 'The Rise of Skywalker', releaseYear: 2019 },
  { title: 'Rogue One', releaseYear: 2016 },
  { title: 'Solo', releaseYear: 2018 }
];

let decadas = [];
let decada;
let clasificacion = {};

//Recorremos el array "starWarsMovies" para obtener las décadas únicas y almacenarlas en el array "decadas":
for (const movie of starWarsMovies) {
    //Obtenemos la década a la que corresponde un año concreto:
    decada = Math.floor(movie.releaseYear / 10) * 10;
    //Comprobar si la década está incluída en el array "decadas". Si no lo estuviera, añadirla.
    if (!decadas.includes(decada)) {
        decadas.push(decada);
    }
}

//Inicializamos el objeto "clasificacion" donde almacenaremos los títulos de las películas:
for (const dec of decadas) {
    clasificacion[dec] = [];
}

//Agrupamos las películas por décadas:
for (const movie of starWarsMovies) {
    decada = Math.floor(movie.releaseYear / 10) * 10;
    clasificacion[decada].push(movie.title);
}

//Imprimir por pantalla el objeto "clasificacion" para mostrar las claves y valores:
console.log(clasificacion);
