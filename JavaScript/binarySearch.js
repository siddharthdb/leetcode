var search = function(nums, target) {
    var len = nums.length;

    if (len <= 2) {
        for (var i = 0; i < len; i++) {
            if (nums[i] === target)
                return i;
        }
    } else {
        var mid = Math.floor(len / 2);

        if (nums[mid] > target) {
            for (var i = 0; i <= mid; i++) {
                if (nums[i] === target)
                    return i;
            }
        } else {
            for (var i = mid; i < len; i++) {
                if (nums[i] === target)
                    return i;
            }
        }
    }

    return -1;

};

console.log(search([-1, 0, 5], 5));