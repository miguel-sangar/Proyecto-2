// Completa la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números del array. Puedes usar este array para probar tu función:
const numbers = [1, 2, 3, 5, 45, 37, 58];

//Suma los elementos del array y almacena el resultado en la variable 'sumatoria':
function sumNumbers(numberList) {
    let sumatoria = 0;
    for(let i=0; i<numberList.length; i++){
        sumatoria = sumatoria + numberList[i];
    }
    //Devuelve la suma del array:
    return sumatoria;
}

//Llama a la función 'sumNumbers' pasándole como argumento el array 'numbers':
console.log(sumNumbers(numbers));
