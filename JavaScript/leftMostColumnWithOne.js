/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} row, col
 *     @return {integer}
 *     this.get = function(row, col) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function (binaryMatrix) {
    let [r, c] = binaryMatrix.dimensions();

    let i = 0,
        j = c - 1,
        leftMostOne = -1;

    while (i < r && j >= 0) {
        let result = binaryMatrix.get(i, j);

        if (result === 0)
            i++;
        else {
            leftMostOne = j;
            j--;
        }
    }
    return leftMostOne;
};