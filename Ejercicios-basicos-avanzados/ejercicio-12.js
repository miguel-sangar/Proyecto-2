// Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Pista: puedes generar un nuevo array y devolverlo. Puedes usar este array para probar tu función:
const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(list) {
    //Inicializamos un array de apoyo:
    let arrayNoDuplicates = [];
    //Tomamos uno a uno cada elemento del array 'list' y lo comparamos con el resto de elementos de dicho array:
    for(let i=0; i<list.length; i++){
        let duplicado = false;
        for(let j=0; j<list.length; j++){
            //Comprobamos qué elementos se repiten para descartarlos:
            if(list[i] == list[j] && (i!=j)){
                duplicado = true;
            }
        }
        //Si el elemento no está repetido, incluirlo en el array de apoyo 'arrayNoDupicates':
        if(duplicado==false){
            arrayNoDuplicates.push(list[i]);
        }
    }
    return arrayNoDuplicates;

}

//Mostrar por consola el array sin los elementos duplicados:
console.log(removeDuplicates(duplicates));
