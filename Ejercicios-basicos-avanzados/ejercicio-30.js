// Dada una lista de canciones, clasifícalas en un objeto donde las claves sean los géneros y los valores sean arrays de canciones de ese género. Utiliza bucles para estructurar este objeto e imprime el resultado por consola.

const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
];

const songs = {};

for (const track of tracks) {
    //Si el objeto "songs" no tiene asignada como clave un género...
    if (!songs[track.genre]) {
      //Creamos la clave:
      songs[track.genre] = [];
    }
    //Asignamos el valor a la clave:
    songs[track.genre].push(track.title);
}

//Imprimimos por pantalla el objeto, con sus claves y propiedades:
console.log(songs);
