// retorna la cantidad de letras de la palabra más larga.
function findMaxLengthOfThreeWords(word1, word2, word3){
    return Math.max(word1.length, word2.length, word3.length);
}
console.log(findMaxLengthOfThreeWords("a", "be", "see")) // 3
console.log(findMaxLengthOfThreeWords("I", "have", "cat")) // 4
console.log(findMaxLengthOfThreeWords("sinceridad", "sinónimo", "sinergia")) // 10