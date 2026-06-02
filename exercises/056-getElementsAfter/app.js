function getElementsAfter(array, n) {
  // retorna un nuevo array con todos los elementos que estén después
  //  (pero sin incluir) el índice dado.
  return array.slice(n + 1);
}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']
