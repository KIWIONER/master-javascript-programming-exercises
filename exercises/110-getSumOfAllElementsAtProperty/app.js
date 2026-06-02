function getSumOfAllElementsAtProperty(obj, key) {
    //  retorna la suma de todos los elementos en el array ubicado en la key dada.
    if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < obj[key].length; i++) {
        //recorre el array ubicado en la key dada y suma cada elemento al total (sum).
        sum += obj[key][i];
        //suma y acumula el valor de cada elemento del array ubicado en la key dada a sum.
    }
    return sum;
    
}

let obj = {
    key: [4, 1,30, 10, 11, 5, 9]
};
let sumadeTodosLosElementosDeUnaPropiedad = getSumOfAllElementsAtProperty(obj, 'key');
console.log(sumadeTodosLosElementosDeUnaPropiedad); // --> 145
