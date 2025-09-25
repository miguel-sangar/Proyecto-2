// Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".

const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

//Creamos los arrays donde se van a guardar los nombres:
let menoresDeEdad = [];
let mayoresDeEdad = [];

//Recorremos el array diferenciando entre menores y mayores de edad y almacenamos los nombres en su array correspondiente:
for(const user of users){
    if(user.years<18){
        menoresDeEdad.push(user.name);
    }else{
        mayoresDeEdad.push(user.name);
    }
}

//Imprimir por pantalla los arrays que contienen los nombres:
console.log(`Usuarios menores de edad: ${menoresDeEdad}`);
console.log(`Usuarios mayores de edad: ${mayoresDeEdad}`);
