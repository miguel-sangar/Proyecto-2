// Calcular un promedio es una tarea extremadamente común, así que prueba a implementar esa funcionalidad en la siguiente función. Puedes usar este array para probarla:
const numbers = [12, 21, 38, 5, 45, 37, 6];

//Calcular el promedio del array 'numbers':
function average(numberList) {
    let promedio = 0;
    let sumatoria = 0;
    for(let i=0; i<numberList.length; i++){
        sumatoria = sumatoria + numberList[i];
    }    
    promedio = sumatoria/numberList.length;
    //Devuelve la suma del array:
    return promedio;
}

//Llamar a la función 'average' pasándole como argumento el array 'numbers':
console.log(average(numbers));
