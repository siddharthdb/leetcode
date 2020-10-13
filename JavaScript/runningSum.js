/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let runSum = [];

    runSum.push(nums[0]);

    for (let i = 1; i < nums.length; i++) {
        runSum.push(nums[i] + runSum[i - 1]);
    }

    return runSum;
};

console.log(runningSum([1, 2, 3, 4]))