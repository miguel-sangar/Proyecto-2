// Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y el id 40. Imprime en un console log el array resultante. Puedes usar este array:

const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

for(let i=0; i<placesToTravel.length; i++){
    //Si el id es igual a 11 o 40, eliminar dicho objeto del array 'placesToTravel' y mover la búsqueda un elemento hacia atrás para no saltarse ningún objeto:
    if(((placesToTravel[i].id) == 11) || ((placesToTravel[i].id) == 40)){
        placesToTravel.splice(i,1);
        i--;
    }    
}

//Imprimir por pantalla el objeto 'placesToTravel':
console.log(placesToTravel);
