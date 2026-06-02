let obj = {
  a: [1, 3, 4],
  b: 2,
  c: ['hi', 'there']
};
function removeArrayValues(obj) {
    // elimina cualquier propiedad cuyos valores sean arrays.
    for (let key in obj){
        if (Array.isArray(obj[key])){
            delete obj[key];
        }
    }
    return obj;
}
console.log(removeArrayValues(obj));
    