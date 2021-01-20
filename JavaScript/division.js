/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    
    let isFlag = false;
    let divend = dividend;
    let divor = divisor;
    let quo = 0;
    
    if (divend < 0) {
        if (divor > 0)
            isFlag = true;
    } else if (divor < 0) {
        isFlag = true;
    }
    
    if(divend == -2147483648 && divor == -1)  return 2147483647;
    
    divend = Math.abs(divend);
    divor = Math.abs(divor);
    
    while (divend >= divor) {
        divend = divend - divor;
        quo++;
    }
    
    return isFlag ? quo * -1 : quo;
};