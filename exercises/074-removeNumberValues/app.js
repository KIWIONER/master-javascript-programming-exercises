let obj = {
    a: 2,
    b: 'remaining',
    c: 4
};

function removeNumberValues(obj) {
    // elimina cualquier propiedad cuyos valores sean números.
    for(let key in obj){
        if(typeof obj[key] === 'number'){
            delete obj[key];
    }
    
}return obj;

};

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining'}
