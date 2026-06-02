function filterEvenLengthWords(words) {
    // retorna un array que contenga solo los 
    // elementos del array cuya longitud es un número par.
    return words.filter(word => word.length % 2 === 0);
    
}

let output = filterEvenLengthWords(['word', 'wordsin', 'worderia', 'words']);
console.log(output); // --> ['word', 'wordsin', 'worderia', 'words']
