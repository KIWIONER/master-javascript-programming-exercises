// retorna un objeto en el cual cada key es un caracter del string dado.
function countAllCharacters(str) {
    let charCount = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    return charCount;
}

let output1 = countAllCharacters('archipielago');
console.log(output1); // --> { a: 3, r: 1, c: 1, h: 1, i: 2, p: 1, e: 1, l: 1, g: 1, o: 1 }
let output2 = countAllCharacters('master');
console.log(output2); // --> { m: 1, a: 1, s: 1, t: 1, e: 1, r: 1 }