/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === 0) {
                let tmp = nums[j];
                nums[j] = nums[i];
                nums[i] = tmp;
            } else {
                continue;
            }

        }
    }

    return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]))