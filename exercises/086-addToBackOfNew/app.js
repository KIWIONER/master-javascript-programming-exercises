function addToBackOfNew(arr, element) {
    // retorna un clon de ese array dado con el elemento añadido al final.
    return [...arr, element];// añádir al final del array
    return arr.concat(element);// añádir al final del array
    // return [element, ...arr]; añadir al principio del array
}

let input = [1, 'avellanas',];
let output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 'avellanas']
console.log(output); // --> [1, 'avellanas', 3]
