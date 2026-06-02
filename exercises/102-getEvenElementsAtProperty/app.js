function getEvenElementsAtProperty(obj, key) {
    // retorna un array que contenga todos los elementos pares del array localizados en la key dada.
    if (Array.isArray(obj[key])) {
        return obj[key].filter(element => element % 2 === 0);
    }
    return [];
    
}

let obj = {
  key: [1000, 11, 50, 17]
};
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
