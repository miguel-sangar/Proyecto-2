// Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no. Considera el caso de múltiples mutantes con el mismo poder.

const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
    for(const mutant of mutants){
        //Si el poder del mutante coincide con el poder que le hemos especificado, indicar el mutante y el poder:
        if(mutant.power==power){
            return `El mutante ${mutant.name} tiene el poder ${power}`
        }
    }
    //En caso contrario indicar que no existe ningún mutante con ese poder:
    return `No hay ningún mutante con el poder ${power}`
}

console.log(findMutantByPower(mutants,"teleportation"));
