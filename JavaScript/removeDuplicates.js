/**
 * Remove duplicate from sorted array
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let len = nums.length;
        
    let i = 1, idx = 1;
    
    if (!nums || !nums.length) {
        return 0;
    }
    
    while (i < len) {
        if (nums[i-1] !== nums[i]) {
            nums[idx] = nums[i]
            idx++;
        }
        i++;            
    }
    
    return idx;
};

// nums = [0,0,2,2,3,3,4,4]
// return k = 4, nums = [0,2,3,4,_,_,_,_] 