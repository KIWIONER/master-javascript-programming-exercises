function getLengthOfShortestElement(arr) {
    // retorna la longitud del string más corto en el array.
    if (arr.length === 0) {
        return 0;
    }
    let minLength = arr[0].length;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length < minLength) {
            minLength = arr[i].length;
        }
    }
    return minLength;
    
}

let output = getLengthOfShortestElement(['oner', 'tworasko', 'three']);
console.log(output); // --> 3
