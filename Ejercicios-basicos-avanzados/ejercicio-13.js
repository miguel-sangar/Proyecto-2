// Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array. Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:

const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function nameFinder(nameList,sName) {
    let existe = false;
    let posicion = 0;
    for(let i=0; i<nameList.length; i++){
        if(nameList[i]==sName){
            existe = true;
            posicion = i;
            return {existe, posicion}
        }
    }
    return existe;
}

console.log(nameFinder(names,'Marc'));
