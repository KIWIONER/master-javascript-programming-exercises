function filterOddElements(arr) {
  // devuelve un array que contiene solo los números impares del array dado.
  let oddElements = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddElements.push(arr[i]);
    }
  }
  return oddElements;
  
}

let output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]
