// Write your function here
function getElementsLessThan100AtProperty(obj, key){
    //retorna un array que contiene todos los elementos del array 
    // ubicado en esa key que sean menores a 100.
    if (Array.isArray(obj[key])) {
        return obj[key].filter(element => element < 100);
    }
    return [];
}
console.log(getElementsLessThan100AtProperty({ key: [100, 50, 200, 3, 20, 70, 300] }, 'key')); // --> [50, 3, 20, 70]
console.log(getElementsLessThan100AtProperty({ key: [1, 11, 4, 3, 8] }, 'key')); // --> [1, 11, 4, 3, 8]
console.log(getElementsLessThan100AtProperty({ key: 'not an array' }, 'key')); // --> []
console.log(getElementsLessThan100AtProperty({ nonExistentKey: [1, 2, 3, 4, 5] }, 'key')); // --> []   