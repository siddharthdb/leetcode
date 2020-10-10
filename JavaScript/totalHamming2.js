var totalHammingDistance = function(nums) {
    var n = nums.length;
    var result = 0;
    for (var i = 0; i < 32; ++i) {
        var countOnes = 0;
        nums.forEach(function(n) {

            countOnes += (n >> i) & 1;
        });

        result += countOnes * (nums.length - countOnes);

    }

    return result;
};

totalHammingDistance([4, 14, 2])