/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let i = 1;
    let maxchar = 1;
    let counter = 1;
    while(i < s.length) {        
        if (s[i] === s[i - 1]) {
            maxchar = Math.max(maxchar, ++counter);            
        } else {
            counter = 1;
        }
        i++;
    }
    
    return maxchar;
};

console.log(maxPower("tourist"));