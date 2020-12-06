var moviesOnFlight = (movies, d) => {
    if(!movies || !movies.length || d < 30) return [];
    let n = movies.length,
        i = 0,
        j = n - 1;
    let res = { a: 0, b: 0 }, max = -1;
    
    while(i < j) {
        let sum = movies[i] + movies[j];
        if(sum <= d - 30) {
            if(sum > max) {
                res.a = movies[i];
                res.b = movies[j];
                max = sum;
            }
            i++;
        } else {
            j--;
        }
    }
    
    if(max === -1) return [];
    
    return [res.a, res.b];
}

console.log(moviesOnFlight([90, 85, 75, 60, 120, 150, 125], 250));