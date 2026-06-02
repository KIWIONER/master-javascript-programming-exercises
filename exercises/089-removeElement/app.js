// Write your function here
function removeElement(array, item){
    //retorna un NUEVO array que contiene los items de dicho array que
    //  no coinciden con el parámetro "por eliminar".
    return array.filter(element => element !== item);
}
let output = removeElement(['a', 'b', 'c', 'a', 'b', 'c'], 'a');
console.log(output); // --> ['b', 'c', 'b', 'c']

let output2 = removeElement(['mango', 'piña', 'mango', 'piña', 'cereza', 'mango'], 'cereza');
console.log(output2); // --> ['mango', 'piña', 'mango', 'piña', 'mango']