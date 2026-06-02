function findShortestOfThreeWords(word1, word2, word3) {
    // regresa el string más corto de los strings dados.
    return [word1, word2, word3].sort((a, b) => a.length - b.length)[0]
    //return [word1, word2, word3].sort((a, b) => b.length - a.length)[0]
    
}

let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
