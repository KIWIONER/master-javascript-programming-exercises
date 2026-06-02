function addToFront(arr, element) {
  // añade el elemento al frente del array, y regresa el array dado.
  arr.unshift(element);
  return arr;
  
}

let output = addToFront([1, 2], "aguacates");
console.log(output); // -> [3, 1, 2]
