var searchMatrix = function (matrix, target) {
    if (!matrix.length) return false;
    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i]
        let start = 0, end = row.length - 1;
        while (start <= end) {
            let mid = Math.floor((start + end) / 2)
            if (target === row[mid]) {
                return true
            } else if (target > row[mid]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return false;
};
