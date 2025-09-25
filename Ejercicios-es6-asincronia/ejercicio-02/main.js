// 2.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43];
const copiaPointsList = [...pointsList];

// 2.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const copiaToy = {...toy};

// 2.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.
//Renombro "pointList" como "pointList1" ya que la variable "pointList" ya existe en el ejercicio 2.1
const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

const unionPointList = [...pointsList1,...pointsLis2];

// 2.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.
//Renombro "toy" como "toy2" por estar ya declarado en el ejercicio 2.2
const toy2 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const fusionObjects = {...toy2,...toyUpdate};

// 2.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const colors2 = [...colors.slice(0,2),...colors.slice(3)];