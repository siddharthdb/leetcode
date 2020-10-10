/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    return words.reduce((cnt, word, idx) => {
        for (const c of[...chars]) word = word.replace(c, '');
        return cnt + (0 === word.length ? words[idx].length : 0);
    }, 0);
};