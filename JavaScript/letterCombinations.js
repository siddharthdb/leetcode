var letterCombinations = function (digits) {
    if (!digits.length) return [];

    const numberMap = new Map();
    numberMap.set('2', ['a', 'b', 'c']);
    numberMap.set('3', ['d', 'e', 'f']);
    numberMap.set('4', ['g', 'h', 'i']);
    numberMap.set('5', ['j', 'k', 'l']);
    numberMap.set('6', ['m', 'n', 'o']);
    numberMap.set('7', ['p', 'q', 'r', 's']);
    numberMap.set('8', ['t', 'u', 'v']);
    numberMap.set('9', ['w', 'x', 'y', 'z']);

    const result = [];

    function permute(str, idx) {
        if (idx === digits.length) {
            result.push(str);
            return;
        }
        
        for (let alpha of numberMap.get(digits[idx])) {
            permute(str + alpha, idx + 1);
        }
    }
    permute('', 0);
    return result;
};

console.log(letterCombinations("234"))