/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let smallCountArr = [];

    for (let i = 0; i < nums.length; i++) {
        let counter = 0;
        for (let j = 0; j < nums.length; j++) {
            if (i != j) {
                if (nums[j] < nums[i])
                    counter++;
            }
        }

        smallCountArr.push(counter);
    }

    return smallCountArr;
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]))