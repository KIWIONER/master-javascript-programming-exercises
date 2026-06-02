// Write your function here
function getNthElementOfProperty(obj, key, num){
    //retorna el elemento nth de un array ubicado en la key dada.
    //return Array.isArray(obj[key]) && obj[key].length > num ? obj[key][num] : undefined;

    if (Array.isArray(obj[key]) && obj[key].length > num) {
        return obj[key][num];
    }
    return undefined;
}
console.log(getNthElementOfProperty({ key: ['ambar', 'bariloche', 'casavieja'] }, 'key', 1));
 // --> 'bariloche'
console.log(getNthElementOfProperty({ key: ['a', 'b', 'c'] }, 'key', 3)); 
// --> undefined

    