// Buscar la palabra más larga: Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

// Puedes usar este array para probar tu función:
const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(stringList) {
    //Asumimos que por defecto, la palabra más larga es la que está en la posición cero:
    let palabraMasLarga = stringList[0];
    //Recorremos cada elemento del parámetro empezando por la posición 1 comprobando si la palabra de la nueva posición es mayor que la variable 'palabraMasLarga':
    for(let i=1; i<stringList.length; i++){
        if(stringList[i].length > palabraMasLarga.length){
            palabraMasLarga = stringList[i];
        }
    }
    //La función devuelve la palabra más larga del parámetro 'stringList':
    return palabraMasLarga;
}

//Pasamos como argumento el array 'avengers' e imprimimos por consola el resultado de la función:
console.log(findLongestWord(avengers));
