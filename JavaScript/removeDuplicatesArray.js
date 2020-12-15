/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let uniq = new Set();
    
    for (let i = 0; i < nums.length; i++ ) {
        uniq.add(nums[i])
    }
    
    let result = Array.from(uniq);
    
    return result.length;
};


console.log(removeDuplicates([1, 1, 2]));