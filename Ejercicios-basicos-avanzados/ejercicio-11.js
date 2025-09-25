// Calcular promedio mezclado: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:
const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];
function averageWord(list) {
    let sumatoriaMezclada = 0;
    let promedioMezclado = 0;
    //Recorre cada elemento del array distinguiendo si es un número o un string:
    for(let i=0; i<list.length; i++){
        if(typeof list[i]==="number"){
            sumatoriaMezclada += list[i];
        }else{
            sumatoriaMezclada += list[i].length;
        }        
    }
    //Calcular el promedio mezclado:
    promedioMezclado = sumatoriaMezclada/list.length;
    return promedioMezclado;
}

console.log(averageWord(mixedElements));
