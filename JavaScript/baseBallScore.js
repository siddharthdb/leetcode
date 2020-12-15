/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    const score = [];
    let result = 0;
    
    if (ops.length === 1) return parseInt(ops[0]);
    
    ops.forEach(o => {
        switch(o) {
            case "D":
                if (score.length > 0) {
                    let lastIdx = score.length - 1;
                    score.push(score[lastIdx] * 2);   
                }                    
                break;
            case "C":
                score.pop();
                break;
            case "+":
                if (score.length > 1) {
                    let lastIdx = score.length - 1;
                    score.push(score[lastIdx] + score[lastIdx - 1]);   
                } else if (score.length === 1) {
                    score.push(score[0] + 0);   
                }
                break;
            default:
                score.push(parseInt(o));
        }
    });
    
    
    score.forEach(s => {
        result += +s;
    });
    
    return result;
    
};