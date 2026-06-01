// Write your function here
function isEitherEven (num1, num2) {
    return num1 % 2 === 0 || num2 % 2 === 0 ;
}
console.log(isEitherEven(1, 2)) // true
console.log(isEitherEven(2, 3)) // true
console.log(isEitherEven(0, 1)) // true
console.log(isEitherEven(1, 1)) // false