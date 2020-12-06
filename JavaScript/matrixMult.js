var multiply = function(A, B) {
    
    let C = new Array(A.length);
    
    for (let r = 0; r < A.length; r++) {

        C[r] = new Array(B[0].length);
        
        for (let c = 0; c < B[0].length; c++) {
            
            C[r][c] = 0;

            for (let  k = 0; k < A[0].length; k++) {
                C[r][c] += A[r][k] * B[k][c] 
            }

        }
    }

    console.log(C)    
};

let A = [
    [ 1, 0, 0],
    [-1, 0, 3]
  ],
  
  B = [
    [ 7, 0, 0 ],
    [ 0, 0, 0 ],
    [ 0, 0, 1 ]
  ]
  

multiply(A, B)