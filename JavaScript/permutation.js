var permutation = function(nums) {
    const result = [];
    
    function permute(arr, options) {
        if(!options.length) result.push(arr);
        
        for(let i = 0; i < options.length; i++) {
            permute([...arr, options[i]], [...options.slice(0, i), ...options.slice(i+1)]);
        }
    }
    permute([], nums)
    return result;
};

console.log(permutation([1,1,2]));