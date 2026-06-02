function removeFromBackOfNew(arr) {
  // retorna un nuevo array que contenga 
  // todos excepto el último elemento del array dado.
  return arr.slice(0, -1);
}

let arr = [1, 2, 3];
let output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]
