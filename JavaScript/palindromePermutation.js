/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    let len = s.length;
    
    let map = new Map();
    
    for (let i = 0; i < len; i++) {
        if (map.has(s[i]))
            map.set(s[i], map.get(s[i]) + 1);
        else
            map.set(s[i], 1);
    }
    
    let count = 0;
    map.forEach((v, k) => {
      count += v % 2;
    })        
    
    return count <= 1;
};