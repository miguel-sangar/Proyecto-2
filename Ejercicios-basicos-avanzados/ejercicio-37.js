// Dado el siguiente código usa forof para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no tienen que repetirse. Es decir, const categorias = ["comedia", "aventura", "acción", "thriller", "animación"]. Para filtrar las categorías puedes ayudarte de la función .includes().

const movies = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "Shrek",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

//Creamos un nuevo array:
let categorias = [];

for(const movie of movies){
    for(const categoria of movie.categories){
        //Si la categoría no existe en el array 'categorias', entonces lo añadimos usando .push().
        //Usamos .includes() para evitar duplicados:
        if(!categorias.includes(categoria)){
            categorias.push(categoria);
        }
    }
}

//Imprimimos por pantalla el array 'categorias':
console.log(categorias);
