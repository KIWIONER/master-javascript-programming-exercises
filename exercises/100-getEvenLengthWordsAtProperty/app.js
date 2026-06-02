function getEvenLengthWordsAtProperty(obj, key) {
    // retorna un array que contenga todos los elementos de palabras
    //  cuya length (longitud) es par, del array localizado en la key dada.
    if (Array.isArray(obj[key])) {
        //return obj[key].filter(element => typeof element === 'string' && element.length % 2 === 0);
        return obj[key].filter(element => typeof element == 'string' && element.length % 2 === 0);
    }
    return [];
}

let obj = {
  key: ['a', 'long', 'game', '4', '99', '7']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
