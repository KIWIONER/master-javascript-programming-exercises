function removeFromFront(arr) {
    // retorna el MISMO array con su primer elemento eliminado.
    arr.shift();
    return arr;
}

let output = removeFromFront([1, 2, 3]);
console.log(output); // --> [2, 3]
