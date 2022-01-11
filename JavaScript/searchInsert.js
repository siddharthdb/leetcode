/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let len = nums.length;
    
    let left = 0,
        right = len - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1
        }
    }
    
    return left;

};

/**
 * Input: nums = [1,3,5,6], target = 5
 * Output: 2
 */