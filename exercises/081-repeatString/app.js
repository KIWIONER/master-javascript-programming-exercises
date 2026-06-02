function repeatString(string, num) {
    // retorna el string dado tantas veces como el número dado.
    return string.repeat(num)
    //Hay una manera muy fácil de repetir un string con el método repeat()
}

let output = repeatString('code, ', 3);
console.log(output); // --> 'code, code, code, '
