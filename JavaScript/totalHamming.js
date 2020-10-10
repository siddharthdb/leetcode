var totalHammingDistance = function(nums) {
    var n = nums.length;
    var distance = 0;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j <= i; j++) {
            if (nums[i] == nums[j])
                continue;

            var xor = nums[i] ^ nums[j];

            while (xor != 0) {
                if (xor % 2 == 1) {
                    distance++;
                }

                xor = xor >> 1;
            }
        }
    }

    console.log(distance);
};

totalHammingDistance([4, 14, 2])