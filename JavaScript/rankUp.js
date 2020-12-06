/**
 * Player Level Up based on cutoff rank
 * @param {number} cutOffRank 
 * @param {number[]} scores 
 */
var countNumPlayerToLevelUp = (cutOffRank, scores) => {
    let frequencies = new Array(100 + 1).fill(0);

    for (let score of scores) {
        if (frequencies[score])
            frequencies[score]++;
        else
            frequencies[score] = 1;
    }
    
    let ans = 0;
    let currentRank = 1;
    for (let i = 100; i >= 0 && currentRank <= cutOffRank; i--) {
        if (frequencies[i] == 0) continue;
        
        ans += frequencies[i];
        currentRank+= frequencies[i];
    }
    return ans;
}

console.log(countNumPlayerToLevelUp(3, [100, 50, 50, 25]))
