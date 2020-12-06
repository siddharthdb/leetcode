var permutationUnique = function(nums) {
    const result = [];
    
    const setResult = new Set();

    function permute(arr, options) {
        if(!options.length) {
            let str = arr.join('');
            if (!setResult.has(str)) {
                setResult.add(str);
                result.push(arr);    
            }            
        }
        
        for(let i = 0; i < options.length; i++) {
            permute([...arr, options[i]], [...options.slice(0, i), ...options.slice(i+1)]);
        }
    }
    permute([], nums)
    return result;
};

console.log(permutationUnique([1,1,2]));