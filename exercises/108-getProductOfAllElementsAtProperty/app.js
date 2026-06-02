function getProductOfAllElementsAtProperty(obj, key) {
    // retorna el producto de todos los elementos en el array ubicado en la key.
    if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0) {
        return 0;
    }
    let product = 1;
    for (let i = 0; i < obj[key].length; i++) {
        product *= obj[key][i];
    }
    return product;
    
}

let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24

let obj2 = {
  key: ['manzanas', 'naranjas', 'cerezas']
};
let output2 = getProductOfAllElementsAtProperty(obj2, 'key');
console.log(output2); // --> 0
