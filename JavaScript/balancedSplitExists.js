function balancedSplitExists(arr) {
    // Write your code here
    arr.sort((a, b) => a - b);

    let A = [...arr],
        B = [];
    while (A.length > B.length) {
        B.push(A.splice(A.length - 1)[0]);
    }

    B.sort((a, b) => a - b);

    for (let i = 0; i < B.length; i++) {
        let C = B.slice(i);
        let sumA = A.reduce((a, b) => a + b, 0)
        let sumC = C.reduce((a, b) => a + b, 0)
        
        if (sumA === sumC) {
          if (A[A.length - 1] === C[0]) {
            return false;
          }
          return true;
        }
        A.push(B[i]);
    }

    return false;
}

function printString(str) {
    var out = '["' + str + '"]';
    return out;
  }
  
  var test_case_number = 1;
  
  function check(expected, output) {
    var result = (expected == output);
    var rightTick = "\u2713";
    var wrongTick = "\u2717";
    if (result) {
      var out = rightTick + ' Test #' + test_case_number;
      console.log(out);
    }
    else {
      var out = '';
      out += wrongTick + ' Test #' + test_case_number + ': Expected ';
      out += printString(expected);
      out += ' Your output: ';
      out += printString(output);
      console.log(out);
    }
    test_case_number++;
  }
  
  var arr_1 = [2, 1, 2, 5];
  var expected_1 = true;
  var output_1 = balancedSplitExists(arr_1); 
  check(expected_1, output_1); 
  
  var arr_2 = [3, 6, 3, 4, 4];
  var expected_2 = false;
  var output_2 = balancedSplitExists(arr_2); 
  check(expected_2, output_2); 