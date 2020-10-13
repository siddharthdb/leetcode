/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let idx = 0;
    let idxArr = [], sMap = new Map();
    while (idx < s.length) {
        idxArr.push(idx);
        sMap.set(idx, s[idx]);
        idx++;
    }
    
    let result = [];
    for(let i = idxArr.length - 1; i >= 0; i--) {
        result.push(sMap.get(i));
    }
    
    return result;
};