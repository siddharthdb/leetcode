/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSubmat = function(mat) {

    let sumRect = 0;
    let rows = mat.length;
    let cols = mat[0].length;
    let dp = [];

    for (let r = 0; r < rows; r++) {
        let cnt = 0;
        dp[r] = [];
        for (let c = 0; c < cols; c++) {
            if (mat[r][c] === 1) {
                ++cnt;
            } else {
                cnt = 0
            }

            dp[r][c] = cnt;
        }
    }


    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let res = Number.MAX_VALUE;
            for (let k = i; k < rows; k++) {
                res = Math.min(dp[k][j], res);
                sumRect += res;
            }
        }
    }

    return sumRect;
};

console.log(numSubmat([
    [1, 0, 1],
    [1, 1, 0],
    [1, 1, 0]
]));