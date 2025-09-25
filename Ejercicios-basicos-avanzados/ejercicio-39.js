// Dado el siguiente código usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito. Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos. Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario. Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto y oportunidad para comprender que hay muchas formas de hacer las cosas en JavaScript.

const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

//Creamos un objeto donde vamos a almacenar dos datos: nombre del sonido y veces que se repite:
let soundContador = {};

for(const user of users){
    //Accedemos a los sonidos favoritos de cada usuario:
    for(const sound in user.favoritesSounds){
        //Si el sonido no existe en el objeto 'soundContador', lo añadimos y le asignamos valor = 1:
        if(!soundContador[sound]){
            soundContador[sound] = 1;
        //Si el sonido ya existiera, solo suma +1:    
        }else{
            soundContador[sound] ++;
        }
    }
}

//Imprimir por pantalla el objeto 'soundContador' que muestra el sonido y veces que se ha añadido a favoritos:
console.log(soundContador);
