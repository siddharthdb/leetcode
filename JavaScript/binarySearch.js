var search = function(nums, target) {
    var len = nums.length;

    if (len <= 2) {
        for (var i = 0; i < len; i++) {
            if (nums[i] === target)
                return i;
        }
    } else {
        var mid = Math.floor(len / 2);

        let start = 0,
            end = len;

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] === target) {
            end = mid;
        } else {
            start = mid
        }

        for (var i = start; i < end; i++) {
            if (nums[i] === target)
                return i;
        }
    }

    return -1;

};

console.log(search([-1, 0, 5], 5));