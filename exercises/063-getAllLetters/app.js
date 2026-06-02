function getAllLetters(str) {
    // retorna un array que contenga todos los caracteres de la palabra.
    let letters = [];
    for ( let i = 0; i < str.length; i++){
        letters.push (str[i]);
    }
    return letters;
}

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
