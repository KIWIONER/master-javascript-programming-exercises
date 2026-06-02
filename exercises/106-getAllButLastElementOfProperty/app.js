function getAllButLastElementOfProperty(obj, key) {
    // etorna un array que contenga todos menos el último 
    // elemento del array ubicado en la key dada.
    if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0) {
      //Si la propiedad no existe (!obj[key]), si no es un array (!Array.isArray) 
      // o si está vacío (length === 0), corta la ejecución inmediatamente y 
      // devuelve un array vacío [].
        return [];
    }
    return obj[key].slice(0, -1);

    
}

let obj = {
  key: [1, 2, 3, 4, 5, 6]
};
let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1, 2, 3, 4, 5]
