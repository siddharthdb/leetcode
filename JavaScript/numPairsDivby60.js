var numPairsDivisibleBy60 = function(time) {
    let count = 0;
    let map = { }
    
    time.forEach(t => {
        
        let mod = t % 60;
        
        let rem = mod === 0 ? 0 : 60 - mod;
        
        if (map[rem]) {
            count += map[rem];
        }
        
        if (map[mod]) {
            map[mod] += 1;
        } else {
            map[mod] = 1;
        }
        
    })
    
    return count;
};