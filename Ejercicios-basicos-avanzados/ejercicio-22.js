// Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let indice = 0;

//Usamos un bucle for normal para acceder a cada una de las posiciones del array, ya que con el "for of" no se pueden manipular. Y eliminamos del array aquellos elementos que cumplan la condición "isVegan==false":
for(let i=0; i<foodSchedule.length; i++){
    if(foodSchedule[i].isVegan==false){
        foodSchedule.splice(i,1);
    }    
}
//Añadimos al array los elementos del array "fruits":
for(let j=0; j<fruits.length; j++){
    foodSchedule.push({name: fruits[j], isVegan: true});
}

//Imprimir por pantalla el array modificado:
console.log(foodSchedule);
