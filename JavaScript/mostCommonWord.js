/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const wordList = paragraph.match(/(\w+)/g);
    
    let map = { };
    
    wordList.forEach(w => {
        let word = w.toLowerCase();
        
        if (!banned.includes(word)) {
            if (map[word]) {
                map[word]++
            } else {
                map[word] = 1;
            }
        }        
    })
    
    let sorted = Object.keys(map).sort((a, b) => map[b] - map[a]);
    
    return sorted[0];
};