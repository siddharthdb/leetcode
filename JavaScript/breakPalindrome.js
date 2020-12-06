var breakPalindrome = function(palindrome) {
    let len = palindrome.length;
    if (len === 1)
        return "";
    
    const chArr = palindrome.split("");
    let mid = Math.floor(len / 2);
    
    for (let i = 0; i < mid; i++) {
        if (chArr[i] != 'a') {
            chArr[i] = 'a';
            return chArr.join("");
        }
    }
    
    chArr[len - 1] = 'b';
    
    return chArr.join("");
};

console.log(breakPalindrome("aba"));