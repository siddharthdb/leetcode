/**
 * Valid paranthesis
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    
    if (s.length % 2 === 1)
        return false;
    
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        }
        
        if (s[i] === ')') {
            if (stack.pop() !== "(")
                return false;
        }
        
        if (s[i] === '}') {
            if (stack.pop() !== "{")
                return false;
        }
        
        if (s[i] === ']') {
            if (stack.pop() !== "[")
                return false;
        }
        
    }
    
    return stack.length === 0;
    
};

// [] => valid
// ([]) => valid
// ([)] => invalid
// ((((])))) => invalid