// Crea una función llamada rollDice() que reciba como parámetro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función. Que la función use el parametro para simular una tirada de dado y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes. Busca información sobre la función de JavaScript Math.random():

//Generar un número aleatorio comprendido entre 1 y el número de caras especificado:
function rollDice(caras){
    let resultado = 1 + Math.random()*caras;
    //Devolver el número aleatorio entero (no decimal):
    return Math.floor(resultado);
}

//Imprimir por pantalla el resultado de tirar un dado con 'n' caras:
console.log(rollDice(12));
