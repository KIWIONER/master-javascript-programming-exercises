let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLargerThan(num, obj) {
    // elimina cualquier propiedad cuyos valores 
    // sean números mayores que el número dado.
    for (let key in obj) {
        if (typeof obj[key] === 'number' && obj[key] > num) {
            delete obj[key];
        }
    }
    return obj;
}
console.log(removeNumbersLargerThan(5, obj)); // { b: 2, c: 'montana' }