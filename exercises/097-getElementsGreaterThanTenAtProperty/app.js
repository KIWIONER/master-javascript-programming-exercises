// Write your function here
function getElementsGreaterThan10AtProperty(obj, key) {
    //retorna un array que contiene los elementos del array 
    // ubicado en esa key que sean mayores a 10.
    if (Array.isArray(obj[key])) {
        return obj[key].filter(element => element > 10);
    }
    return [];
}
console.log(getElementsGreaterThan10AtProperty({ key: [1, 20, 3, 40, 5, 60] }, 'key')); // --> [20, 40, 60]
console.log(getElementsGreaterThan10AtProperty({ key: [1, 2, 3] }, 'key')); // --> []
console.log(getElementsGreaterThan10AtProperty({ key: 'not an array' }, 'key'));