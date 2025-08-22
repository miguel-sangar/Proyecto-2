// Crea una función llamada swap que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array. Retorna el array resultante.

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array,indice1,indice2){
    //Creamos dos variables de apoyo:
    let indiceApoyo1 = 0;
    let indiceApoyo2 = 0;
    
    //Recorremos el array para buscar y guardar en las variables de apoyo los elementos del array especificados:
    for(let i=0; i<array.length; i++){
        if(i==indice1){
            indiceApoyo1 = array[i];
        }
        if(i==indice2){
            indiceApoyo2 = array[i];
        }
    }
    
    //Recorremos el array para cambiar de posición
    for(let j=0; j<array.length; j++){
        if(j==indice1){
            array[j] = indiceApoyo2;
        }
        if(j==indice2){
            array[j] = indiceApoyo1;
        }
    }
    return array;
}

//Imprimir por pantalla el array con los elementos intercambiados:
console.log(swap(fantasticFour,1,3));
