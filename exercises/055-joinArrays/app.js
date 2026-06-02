function joinArrays(arr1, arr2) {
  // retorna un array con los elementos de arr1, 
  // seguido por los elementos de arr2 en orden.
  return arr1.concat(arr2);
  
}

let output = joinArrays([1, 2], [3, 4]);
console.log(output); // --> [1, 2, 3, 4]
