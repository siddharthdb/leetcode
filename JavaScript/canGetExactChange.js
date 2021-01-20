function canGetExactChange(targetMoney, denominations) {
    const dp = Array(targetMoney + 1).fill(Infinity);
      dp[0] = 0;
      
      for(let i = 1; i < dp.length; i++) {
          for(let coin of denominations) {
              if(i-coin >= 0) 
                dp[i] = Math.min(dp[i], dp[i-coin] + 1);
          }
      }
      return dp[targetMoney] === Infinity ? false : true;
  }