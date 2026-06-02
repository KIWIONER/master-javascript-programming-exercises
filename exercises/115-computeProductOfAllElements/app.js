function computeProductOfAllElements(arr) {
  // devuelve los productos de todos los elementos del array dado.  
  if(arr.length === 0) {
    return 0;
  }
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
  
}

let output = computeProductOfAllElements([2, 6, 5]);
console.log(output); // --> 60
let output2 = computeProductOfAllElements([1, 2, 3, 4]);
console.log(output2); // --> 24
