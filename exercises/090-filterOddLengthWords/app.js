function filterOddLengthWords(words) {
    // retorna un array que contenga únicamente 
    // los elementos del array dado cuya length sea números impares.
    return words.filter(word => word.length % 2 !== 0);
    //return words.filter(word => word.length % 2 === 0);
}

let output = filterOddLengthWords(['there', 'it', 'is', 'now', '409', '4','595847369']);
console.log(output); // --> ['there', 'now']
