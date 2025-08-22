// Crea una función que, dada una lista de actores con su año de nacimiento, calcule su edad actual y retorne un nuevo array con los nombres de los actores y sus edades. Averigua como hallar el año actual en tus cálculos.

const actors = [
  { name: 'Leonardo DiCaprio', born: 1974 },
  { name: 'Tom Hanks', born: 1956 },
  { name: 'Meryl Streep', born: 1949 },
  { name: 'Brad Pitt', born: 1963 },
  { name: 'Johnny Depp', born: 1963 },
  { name: 'Scarlett Johansson', born: 1984 },
  { name: 'Jennifer Lawrence', born: 1990 },
  { name: 'Denzel Washington', born: 1954 },
  { name: 'Morgan Freeman', born: 1937 },
  { name: 'Cate Blanchett', born: 1969 }
];

//Obtenemos el año actual y lo guardamos:
const añoActual = new Date().getFullYear();

function calculateActorsAges(actors) {
    //Creamos un nuevo array para almacenar los nombres y sus edades:
    let actors2 = [];
    //Creamos variable para guardar temporalmente la edad:
    let edad = 0;
    for(let i=0; i<actors.length; i++){
        //Calculamos la edad de cada actor:
        edad = añoActual - actors[i].born;
        //Guardamos el objeto que contiene nombre y edad en el nuevo array 'actors2':
        actors2[i] = {name: actors[i].name, age: edad};
    }
    return actors2;
}

//Imprimir por pantalla el array 'actors2' que contiene el nombre y edad de todos los actores del array 'actors':
console.log(calculateActorsAges(actors));
