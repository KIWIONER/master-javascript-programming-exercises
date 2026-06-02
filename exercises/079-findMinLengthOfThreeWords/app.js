// retorna la cantidad de letras de la palabra más corta.
function findMinLengthOfThreeWords(word1, word2, word3) {
    return Math.min(word1.length, word2.length, word3.length);
}
console.log(findMinLengthOfThreeWords("a", "be", "see")); // 1
console.log(findMinLengthOfThreeWords("apples", "pears", "lemons")); // 5
console.log(findMinLengthOfThreeWords("egypchiguatores", "eucaristía", "australopitecus")); // 2