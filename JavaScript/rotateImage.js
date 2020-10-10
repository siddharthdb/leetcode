var rotateImage = function(matrix) {
    matrix.reverse();

    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < i; j++) {
            var tmp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = tmp;
        }
    }
};