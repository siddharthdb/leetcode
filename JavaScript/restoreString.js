/**
 * Given a string s and an integer array indices of the same length.
 * The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
 * Return the shuffled string.
 * Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
 * Output: "leetcode"
 * Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
 */
var restoreString = function(s, indices) {
    if (indices.length === 1)
        return s;

    let sMap = new Map();

    for (let i = 0; i < indices.length; i++) {
        sMap.set(indices[i], s[i]);
    }

    indices.sort((a, b) => a - b);

    let result = "";

    for (let idx of indices) {
        result += sMap.get(idx);
    }

    return result;

}

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]))