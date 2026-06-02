function getAllWords(str) {
    //  retorna un array que contenga cada palabra de la oración.
    let words = str.split(' ');
    return words;
}

let output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']
