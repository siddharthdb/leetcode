/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const result = [];
    
    for (let i = 0; i < nums.length - k + 1; i++) {
        result.push(Math.max(...nums.slice(i, i + k)));
    }
    
    return result;
    
    // return nums.reduce((res, cur, i) => {
    //     (i < nums.length - k + 1) && res.push(Math.max(...nums.slice(i, k + i)))
    //     return res;
    // }, []);
};