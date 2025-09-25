// 4.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const mayor = ages.filter(num => num>18);
console.log(mayor);

// 4.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.
//Renombro "ages" como "ages2" ya que "ages" ya está declarada en el ejercicio 4.1
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const pares = ages2.filter(par => par%2==0);
console.log(pares);

// 4.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const lol = streamers.filter(streamer => streamer.gameMorePlayed==="League of Legends");
console.log(lol);

// 4.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos usar la funcion .includes() para la comprobación.
//Renombro "streamers" como "streamers2" ya que "streamers" ya está declarado en el ejercicio 4.3
const streamers2 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const caracter = streamers2.filter(streamer => streamer.name.includes("u"));
console.log(caracter);

// 4.5 Utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion .includes() para la comprobación. Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35.

const charLegends = streamers2.filter(streamer => streamer.gameMorePlayed.includes("Legends"));
const charLegendsMayus = charLegends.map(streamer => {
    if(streamer.age > 35){
        streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
    }
    return streamer;
});

console.log(charLegendsMayus);