function filterEvenElements(arr) {
    // retorna un array que contenga solo los números pares encontrados en el array.
    if(arr.length === 0) {
        return 0;
    }
    let evenElements = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenElements.push(arr[i]);
        }
    }
    return evenElements;
    
}

let output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]
