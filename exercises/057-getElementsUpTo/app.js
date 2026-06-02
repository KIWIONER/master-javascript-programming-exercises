function getElementsUpTo(array, n) {
  // retorna un array con todos los elementos hasta 
  // (pero sin incluir) el elemento en el índice dado.
  return array.slice(0, n);
}

let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']
