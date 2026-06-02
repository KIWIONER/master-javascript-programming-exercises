function getAllElementsButNth(array, n) {
    // retorna un array con todos los elementos salvo el Nth.
    //return array.splice(n, 1);
    return array.filter((_, index) => index !== n);

}

let agarrarElementosMenosIndice = getAllElementsButNth(['a', 'b', 'c'], 2);
console.log(agarrarElementosMenosIndice); // --> ['a', 'b']

let agarrarElementosMenosIndice2 = getAllElementsButNth(['Hola ', 'soy', 'Matias'], 0);
console.log(agarrarElementosMenosIndice2); // --> ['soy', 'Matias']
