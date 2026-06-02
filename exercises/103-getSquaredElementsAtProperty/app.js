function getSquaredElementsAtProperty(obj, key) {
    //  retorna un array que contenga todos los elementos al 
    // cuadrado del array, localizados en la key dada.
    if (Array.isArray(obj[key])) {
        return obj[key].map(element => element ** 2);
        //.map e utiliza para transformar los elementos de un array. Su función principal es recorrer
        //el array inicial, aplicar una operación matemática o lógica a cada elemento 
        //y devolver un array nuevo con los resultados, manteniendo exactamente la misma longitud.
    }
    return [];  
    
}

let obj = {
  key: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
