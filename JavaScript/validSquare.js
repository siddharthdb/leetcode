/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function (p1, p2, p3, p4) {
    let corners = [p1, p2, p3, p4];

    corners = corners.sort((a, b) => a[0] - b[0]);

    corners = corners.sort((a, b) => a[1] - b[1]);

    return corners;
};


console.log(validSquare([0, 0], [1, 1], [0, 1], [1, 0]))

console.log(Math.atan(Infinity) * (180/Math.PI))