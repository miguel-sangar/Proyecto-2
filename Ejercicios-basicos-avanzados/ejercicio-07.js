// Completa esta función para que, al recibir dos números por argumento, te devuelva por consola el más alto de los dos.
function greaterNumber(numberOne , numberTwo) {
  if(numberOne>numberTwo){
    console.log(`${numberOne} es el más alto`);
  } else if (numberOne==numberTwo){
    console.log(`Ambos números son iguales`);
  } else{
    console.log(`${numberTwo} es el más alto`);
  }
}

greaterNumber(6,5);
