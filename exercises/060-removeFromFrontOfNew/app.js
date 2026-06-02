function removeFromFrontOfNew(arr) {
    //  retorna un nuevo array que 
    // contenga todos los elementos menos el primero del array dado.
    return arr.slice(1);
}

let arr = [1, 2, 3];
let output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr); // --> [1, 2, 3]
