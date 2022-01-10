/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    
    let n = digits.length;
    
    for (let idx = n - 1; idx >= 0; idx--) {
        if (digits[idx] === 9) {
            digits[idx] = 0;
        } else {
            digits[idx]++;
            
            return digits;
        }
    }
    
    digits.unshift(1);
    return digits
    
};

/**
 * Input: digits = [1,2,3]
 * Output: [1,2,4]
 * 
 * Input: digits = [9]
 * Output: [1,0]
 */