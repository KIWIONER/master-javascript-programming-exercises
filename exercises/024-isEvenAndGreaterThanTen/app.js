// Write your function here
function isEvenAndGreaterThanTen(num){
    return num > 10 && num % 2 === 0;
}
console.log(isEvenAndGreaterThanTen(11)); // false
console.log(isEvenAndGreaterThanTen(8)); // false
console.log(isEvenAndGreaterThanTen(12)); // true