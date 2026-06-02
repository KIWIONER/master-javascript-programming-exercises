// Write your function here
function getElementsThatEqual10AtProperty(obj, key){
    //retorna un array que contiene todos los elementos de 
    // un array ubicado en la key dada que sean iguales a 10.
    if (Array.isArray(obj[key])) {
        return obj[key].filter(element => element === 10);
    }
    return [];
}
console.log(getElementsThatEqual10AtProperty({ key: [1000, 10, 50, 10, 100] }, 'key')); // --> [10, 10]
console.log(getElementsThatEqual10AtProperty({ key: [1, 11, 4, 3, 8] }, 'key')); // --> []
console.log(getElementsThatEqual10AtProperty({ key: 'not an array' }, 'key')); // --> []
console.log(getElementsThatEqual10AtProperty({ nonExistentKey: [1, 2, 3, 4, 5] }, 'key')); // --> []