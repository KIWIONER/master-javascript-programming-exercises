function addToFrontOfNew(arr, element) {
    // retorna una nuevo array que contiene 
    // todos los elementos de ese array más el 
    // elemento dado añadido al inicio del array.
    return [element, ...arr];
    //return [element].concat(arr);   
}

let input = [1, 2];
let output = addToFrontOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [3, 1, 2];

