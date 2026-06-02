function squareElements(arr) {
  //  retornar un nuevo array donde cada elemento es el cuadrado de cada elemento del array dado
  let squaredArray = [];
  for (let i = 0; i < arr.length; i++) {
    squaredArray.push(arr[i] * arr[i]);
  }
  return squaredArray;  
  
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
