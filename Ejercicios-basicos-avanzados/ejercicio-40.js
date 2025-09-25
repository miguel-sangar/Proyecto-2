// 1- Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro.

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

//Buscar un texto en un array:
function findArrayIndex(array, text) {
    for(let i=0; i<array.length; i++){
        //Si el valor que le pasamos al parámetro 'text' coincide con un elemento del array, obtenemos su posición:
        if(array[i]==text){
            return i;
        }
    }
    //Si el valor que le asignamos a 'text' no está en el array, devuelve -1:
    return -1;
}

//Eliminar indice encontrado por la función 'findArrayIndex':
function removeItem(array,text){
    //Llamamos a la función 'findArrayIndex' y guardamos el resultado en 'indice':
    let indice = findArrayIndex(mainCharacters, "Obi-Wan");
    //Si el índice existe, lo eliminamos del array:
    if(indice>=0){
        array.splice(indice,1);
    }
    //Devolvemos el array:
    return array;
}

//Llamar a la función 'removeItem' con los mismos argumentos que los de la función 'findArrayIndex' y mostrar el array resultante:
console.log(removeItem(mainCharacters, "Obi-Wan"));
