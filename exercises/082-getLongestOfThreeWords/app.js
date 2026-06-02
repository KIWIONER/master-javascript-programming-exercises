function getLongestOfThreeWords(word1, word2, word3) {
    // retorna la más larga de las tres palabras.  
    return [word1, word2, word3].sort((a, b) => b.length - a.length)[0]
    // Para resolver este ejercicio, puedes usar el método sort()
    //  para ordenar las palabras por su longitud y luego
    //  devolver la primera palabra del array ordenado.
}

let output = getLongestOfThreeWords('these', 'three', 'words');
let output1 = getLongestOfThreeWords('caramelo', 'siberiano', 'ergos');
console.log(output); // --> 'these'
console.log(output1); // --> 'siberiano'
