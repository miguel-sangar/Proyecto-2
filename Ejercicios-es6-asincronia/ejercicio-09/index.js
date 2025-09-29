// Ahora realizaremos una petición a la PokeAPI, queremos mostrar al entrar en la página la imagen de un Pokemon, la magia estará en que cada vez que recargues la página, será un nuevo Pokemon dentro de la primera generación de Pokemon, es decir, del 1 al 151.

// Los Pokemon no solo tienen una imagen, si no que tendrán muchas, hay que hallar la manera de encontrar la que más os guste.

// Para ello el HTML será muy sencillo, y la URL esta vez os la aportaremos directamente, aunque os aconsejamos echarle un ojo a la documentación ya que es muy completa.

// Documentación: https://pokeapi.co/

// URL: https://pokeapi.co/api/v2/pokemon/1

// Tened en cuenta que esta URL se refiere al pokemon número 1, que es bulbasaur, debemos hallar la manera de con una url similar ir consiguiendo pokemons aleatorios dentro de unos límites.

async function Pokemon() {
    //Establecemos un mínimo y un máximo:
    const min = 1;
    const max = 151;
    //Creamos un número random entero entre ese mínimo y el máximo:
    let numRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    //Seleccionamos la etiqueta HTML que tiene la clase ".random-image":
    const img = document.body.querySelector(".random-image");
    try {
        //Hacemos una petición a la pokeapi para que nos devuelva un pokemon aleatorio:
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${numRandom}`);
        //Convertimos la respuesta de la API en formato .json():
        const data = await respuesta.json();
        //Obtenemos la imagen que queremos y guardamos su URL como propiedad de la etiqueta HTML:
        img.src = data.sprites.front_shiny;
    //Capturamos el posible error, en caso de que suceda:
    } catch (error) {
        console.log(error);
    }
}
//Llamamos a la función:
Pokemon();