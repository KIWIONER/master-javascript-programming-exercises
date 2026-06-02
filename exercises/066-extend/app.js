let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    // añade propiedades del segundo objeto al primero.
    for (let key in obj2) {
        //solo añadimos la propiedad si nobj1 NO la tiene ya
        if(!(key in obj1)){
            obj1[key] = obj2[key];
        }
    }
    return obj1;

}
console.log(extend(obj1, obj2)); // { a: 1, b: 2, c: 3 }