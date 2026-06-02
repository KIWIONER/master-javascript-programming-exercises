function keep (array, element){
    // retorna un array que contiene los items que coinciden con el elemento dado.
    return array.filter(item => item === element);
}

let output = keep(['a', 'b', 'c', 'a', 'b', 'c'], 'a');
console.log(output); // --> ['a', 'a']

let output2 = keep(['mango', 'piña', 'mango', 'piña', 'cereza', 'mango'], 'mango');
console.log(output2); // --> ['mango', 'mango']