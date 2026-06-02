function addToBack(arr, element) {
  // retorna el array con el elemento añadido al final.
  arr.push(element);
  return arr;
}

let output = addToBack([1, 2], "cerezas frias");
console.log(output); // -> [1, 2, "cerezas frias"]
