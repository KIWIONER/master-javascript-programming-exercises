function findShortestElement(arr) {
    // retorna el string más corto dentro del array.
    if (arr.length === 0) {
        return '';
    }
    let shortestElement = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length < shortestElement.length) {
            shortestElement = arr[i];
        }
    }
    return shortestElement;

}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'