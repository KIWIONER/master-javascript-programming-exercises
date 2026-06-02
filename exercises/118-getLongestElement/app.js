function getLongestElement(arr) {
    // retorna el string más largo dentro del array.
    if (arr.length === 0) {
        return '';
    }
    let longestElement = arr[0];
    for (let i=1; i<arr.length; i++){
        if(arr[i].length > longestElement.length){
            longestElement = arr[i];
        }
    }
    return longestElement;
}

let output = getLongestElement(['oner', 'twokeor', 'threekoma']);
console.log(output); // --> 'threekoma'
