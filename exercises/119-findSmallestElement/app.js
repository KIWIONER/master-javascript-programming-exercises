function findSmallestElement(arr) {
    // retorna el número más pequeño dentro del array.
    if (arr.length === 0) {
        return 0;
    }
    let smallestElement = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallestElement) {
            smallestElement = arr[i];
        }
    }
    return smallestElement;
}

let output = findSmallestElement([6, 4, 7, 3, 9, 10, ]);
console.log(output); // --> 3