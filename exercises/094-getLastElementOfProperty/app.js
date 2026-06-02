// Write your function here
function getLastElementOfProperty(obj, key){
    
    //retorna el último elemento de un array en dicha key.
    if (Array.isArray(obj[key]) && obj[key].length > 0) {
        return obj[key][obj[key].length - 1];
    }
    return undefined;
    
}
console.log(getLastElementOfProperty({ key: ['cardao', 'silueta', 'cucutrastras'] }, 'key')); // --> 'c'
console.log(getLastElementOfProperty({ key: ['a', 'b', 'c'] }, 'nonexistentKey')); // --> undefined
console.log(getLastElementOfProperty({ key: 'not an array' }, 'key')); // --> undefined
