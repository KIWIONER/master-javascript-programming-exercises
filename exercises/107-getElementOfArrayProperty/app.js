function getElementOfArrayProperty(obj, key, index) {
    // retorna el valor de un elemento en el index proporcionado 
    // del array ubicado dentro del objeto en la key dada.
    if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0) {
        return undefined;
    }
    return obj[key][index];
}

let obj = {
    key: ['reinaldo','Jamil', 'Albrey']
};
let output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output); // --> 'Jamil'
