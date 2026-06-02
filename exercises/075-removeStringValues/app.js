function removeStringValues(obj) {
    // elimina cualquier propiedad en el objeto cuyo valor sea string.
    for(let key in obj){
        if (typeof obj[key] === 'string'){
            delete obj[key];
        }
    }
    return obj;
    
}

let obj = {
    name: 'Sam',
    age: 20
}

removeStringValues(obj);
console.log(obj); // --> { age: 20 }
