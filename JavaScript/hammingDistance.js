/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var xor = x ^ y;
    var distance = 0;
    while (xor !== 0) {
        if (xor % 2 === 1) {
            distance++;
        }

        xor = xor >> 1;
    }

    return distance;
};