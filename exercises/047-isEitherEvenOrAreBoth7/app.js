function isEitherEvenOrAreBoth7(num1, num2) {
    // your code here
    return num1 % 2 === 0 || num2 % 2 === 0 || (num1 === 7 && num2 === 7);
    
}console.log(isEitherEvenOrAreBoth7(1, 7)) // true
console.log(isEitherEvenOrAreBoth7(1, 3)) // false
console.log(isEitherEvenOrAreBoth7(2, 3)) // true

