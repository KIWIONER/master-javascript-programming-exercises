function getAverageOfElementsAtProperty(obj, key) {
  // retorna el promedio (average) de todos los elementos del array localizados en la key dada.
  if (Array.isArray(obj[key]) && obj[key].length > 0) {
    const sum = obj[key].reduce((acc, curr) => acc + curr, 0);
    return sum / obj[key].length;
  }
  return 0;

}
console.log(getAverageOfElementsAtProperty({ key: [1, 2, 3] }, 'key')); // --> 2
console.log(getAverageOfElementsAtProperty({ key: [1, 2, 3, 4] }, 'key')); // --> 2.5
console.log(getAverageOfElementsAtProperty({ key: [] }, 'key')); // --> 0