function removeFromBack(arr) {
    // retorna el array con su último elemento eliminado.
    arr.pop();
    return arr;
    
}

let output = removeFromBack([1, 2, 3]);
console.log(output); // --> [1, 2]
