/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number} index position in nums array 
 */
var searchSortedRotated = (nums, target) => {
    let start = 0, end = nums.length - 1;
    
    while(start <= end) {
        
        let mid = Math.floor((start+end) / 2);
        
        if (nums[start] === target) return start;
        if (nums[end] === target) return end;
        if (nums[mid] === target) return mid;
                
        if(target > nums[mid]) {
            if(target >= nums[start]  && nums[start] > nums[mid]) {
                end = mid - 1; 
            } else {
                start = mid + 1; 
            }
        } else {
            if(target < nums[start] && nums[end] < nums[mid]) {
                start = mid + 1;   
            } else {
                end = mid - 1; 
            }
        }        
    }
    
    return -1;
};

console.log(searchSortedRotated([4, 5, 6, 7, 0, 1, 2], 0))