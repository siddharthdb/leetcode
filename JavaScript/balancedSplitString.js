var balancedStringSplit = function(s) {
    let total = 0;
    let openCount = 0;
    
    s.split("").forEach(s => {
        if (s === 'R') {
            openCount++
        } else {
            openCount--
        }
            
        if (openCount == 0) {
            total++
        }
    });
    
    return total
};

console.log(balancedStringSplit("RLRRLLRLRL"));