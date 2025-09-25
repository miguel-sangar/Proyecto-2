// 6.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de los alumnos usando la función .reduce().

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5},
    {name: 'Maria Aranda Jimenez', score: 1},
    {name: 'Cristóbal Martínez Lorenzo', score: 6},
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

//Primero almacenamos los valores en un array llamado "notas":
const notas = exams.map(exam => exam.score);
//Ahora sumamos todos los valores del array:
const sumatoria = notas.reduce((acum,actual) => acum+actual,0);
//Mostramos la sumatoria por consola:
console.log(sumatoria);

// 6.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los alumnos que esten aprobados usando la función .reduce().
//Primero almacenamos en un array las notas iguales o superiores a 5:
const aprobados = notas.filter(nota => nota>=5);
//A continuación, sumamos dichas notas:
const sumatoriaAprobados = aprobados.reduce((acum,actual) => acum+actual,0);
//Mostramos el resultado por pantalla:
console.log(sumatoriaAprobados);

// 6.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().
const media = sumatoria/exams.length;
console.log(`La media de todas las notas es: ${media}`);