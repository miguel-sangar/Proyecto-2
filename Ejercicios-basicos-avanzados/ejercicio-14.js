// Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,... Podéis conformar el formato que queráis para la devolución del resultado siempre y cuando sea claro. Puedes usar este array para probar tu función:

const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];

function repeatCounter(list) {
    let contadorRepeticiones = [];
    //Recorremos el array 'list' para extraer las palabras únicas y las añadimos al array 'contadorRepeticiones':
    for (let i = 0; i < list.length; i++) {
        if (!contadorRepeticiones.includes(list[i])) {
            contadorRepeticiones.push(list[i]);
        }
    }

    //Recorremos el array 'contadorRepeticiones' y contamos cuántas veces se repite cada palabra en el array 'list':
    for (let i = 0; i < contadorRepeticiones.length; i++) {
        let rep = 0;
        for (let j = 0; j < list.length; j++) {
            if (contadorRepeticiones[i] === list[j]) {
                rep++;
            }
        }
        //Imprimimos por pantalla cada elemento del array 'contadorRepeticiones' junto con el número de veces que se repite:
        console.log(`${contadorRepeticiones[i]}: ${rep} veces`);
    }
}

//Llamamos a la función, pasándole como argumento el array 'words':
repeatCounter(words);
