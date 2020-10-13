/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {

    let max = arr[0];

    let peakIdx = 0;

    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
            peakIdx = i;
        }
    }

    return peakIdx;
};

console.log(peakIndexInMountainArray([24, 69, 100, 99, 79, 78, 67, 36, 26, 19]))