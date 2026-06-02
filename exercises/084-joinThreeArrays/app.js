function joinThreeArrays(arr1, arr2, arr3) {
  // retorna un array con los elementos de arr1 seguido 
  // por los elementos del arr2 y del arr3 en orden.
  return [...arr1, ...arr2, ...arr3];
  return arr1.concat(arr2, arr3);
  // Para resolver este ejercicio, puedes usar el operador de 
  // propagación (spread operator) para combinar los tres arrays en uno solo.
}
let output= joinThreeArrays([1, 2, 3], [4, 5], [6, 7]);
console.log(output); // --> [1, 2, 3, 4, 5, 6, 7] 

let tresArraysJuntos = joinThreeArrays(['a', 'b'], ['c', 'd'], ['e', 'f']);
console.log(tresArraysJuntos); // --> ['a', 'b', 'c', 'd', 'e', 'f']

let tres_arrays_juntos = joinThreeArrays(['a', 'b'], [1, 2], ['c', 'd']);
console.log(tres_arrays_juntos); // --> ['a', 'b', 1, 2, 'c', 'd']