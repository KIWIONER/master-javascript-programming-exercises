function getOddElementsAtProperty(obj, key) {
    // retorna un array que contenga todos los elementos impares del array localizados en la key dada.
    if (Array.isArray(obj[key])) {
        return obj[key].filter(element => element % 2 !== 0);
    }
    return [];
    
}

let obj = {
  key: [1, 2, 3, 4, 5]
};
let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
