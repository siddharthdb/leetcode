/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let largest = height[0];
    let largestIndex = 0;
    let water = 0;

    for(let i=1; i<height.length; i++) {
        
        if (height[i] > height[i-1]) {
                        
            let fill = Math.min(largest, height[i]);
            
            for(let j=largestIndex+1; j<i; j++) {
                if (height[j] < fill) {
                    water = water + (fill - height[j]);
                    height[j] = fill;
                }
            }
            
            if (height[i] > largest) {
                largest = height[i];
                largestIndex = i;
            }
            
        }
        
    }
    return water;
};