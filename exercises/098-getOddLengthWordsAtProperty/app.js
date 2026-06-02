// Write your function here
function getOddLengthWordsAtProperty(obj, key) {
    //retorna un array que contiene todos los elementos de dicho array 
    // ubicados en esa key que corresponden a palabras con una cantidad
    //  de letras impar.
    if (Array.isArray(obj[key])) {
        return obj[key].filter(element => typeof element === 'string' && element.length % 2 !== 0);
    }
    return [];
}console.log(getOddLengthWordsAtProperty({ key: ['there', 'it', 'is', 'now'] }, 'key')); // --> ['there', 'now']
console.log(getOddLengthWordsAtProperty({ key: ['one', 'two', 'three', 'four', 'five'] }, 'key')); // --> ['one', 'two', 'three', 'five']
console.log(getOddLengthWordsAtProperty({ key: ['hi', 'hello', 'hola', 'bonjour'] }, 'key'));