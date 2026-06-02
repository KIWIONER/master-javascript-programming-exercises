function convertDoubleSpaceToSingle(str) {
    // retorna el string, con todos los espacios 
    // dobles convertidos en espacios simples.
    return str.replace(/  +/g, ' ');
}

let output = convertDoubleSpaceToSingle("string    with     double     spaces");
console.log(output); // --> "string with double spaces"
