var minCostConnectRopes = (ropes) => {
    let minCost = 0;
    const remainingRopes = ropes;
    remainingRopes.sort((a, b) => a - b);

    while(remainingRopes.length > 1)
    {
        let currentCost = remainingRopes[0] + remainingRopes[1];
        remainingRopes.splice(0, 2);
        remainingRopes.push(currentCost);
        minCost += currentCost;
        remainingRopes.sort((a, b) => a - b);
    }
    return minCost;
}

console.log(minCostConnectRopes([8, 4, 6, 12]))