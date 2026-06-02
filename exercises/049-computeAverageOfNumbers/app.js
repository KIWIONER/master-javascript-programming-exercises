// Write your function here
function computeAverageOfNumbers(nums){
    if (nums.length === 0){
        return 0;
    }
    return nums.reduce((acc, num) => acc + num, 0) / nums.length;
}
console.log(computeAverageOfNumbers([1, 2, 3, 4, 5])); // --> 3
