// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums. Que tenga la apariencia de una web completa dentro de lo posible.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

//Busco en Google las portadas de los álbumes, las subo a "Imgur" y hago un array de dichas URL's:
const portadas = [
    "./images/DeMysteriisDomSathanas.jpg",
    "./images/ReignofBlood.jpg",
    "./images/RidetheLightning.jpg",
    "./images/Painkiller.jpg",
    "./images/IronFist.jpg",
];

//Busco el segundo div dentro del main, que es donde pretendo insertar los div:
const segundoDiv = document.querySelector("main > div:nth-child(2) > div");

for(let i=0; i<albums.length; i++){
    //Por cada álbum, genero un div, una imagen y un párrafo:
    let caja = document.createElement("div");
    let portada = document.createElement("img");
    let album = document.createElement("p");
    //Asigno cada URL a su portada correspondiente:
    portada.src = portadas[i];
    //Asigno a cada album su nombre correspondiente:
    album.textContent = albums[i];
    //Añado cada portada y cada album a cada div:
    caja.appendChild(portada);
    caja.appendChild(album);
    //Inserto cada caja en el segundo div del main:
    segundoDiv.appendChild(caja);
    //Le asigno una clase al div "caja":
    caja.classList.add("caja");
}