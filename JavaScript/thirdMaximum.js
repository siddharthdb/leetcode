/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let _max = 0

    const seen = new Set(nums)

    if (seen.size < 3) return Math.max(...seen)

    for (let i = 0; i < 3; ++i) {
        _max = Math.max(...seen)
        seen.delete(_max)
    }

    return _max;
};

console.log(thirdMax([2, 2, 3, 1]));