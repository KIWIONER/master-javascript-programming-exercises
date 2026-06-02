// Write your function here
function getFirstElementOfProperty(obj, key){
  //retorna el primer elemento de un array ubicado en la key dada.
  if (Array.isArray(obj[key]) && obj[key].length > 0) {
    return obj[key][0];
  }
  return undefined;
}
console.log(getFirstElementOfProperty({ key: ['cerezas', 'b', 'c'] }, 'key')); // --> 'cerezas'