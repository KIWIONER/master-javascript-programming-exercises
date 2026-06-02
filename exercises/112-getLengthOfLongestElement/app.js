function getLengthOfLongestElement(arr) {
    //  retorna la longitud del string más largo en el array.
    if (arr.length === 0) {
        return 0;
    }
    let maxLength = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > maxLength) {
            maxLength = arr[i].length;
        }
    }
    return maxLength;
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
