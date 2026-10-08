class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
       // use sliding window
       let i=0
       let j= 1
       let maxValue = 0

  
       while(j<prices.length){
            let profit = prices[j] - prices[i]
            if(profit<0){
                i=j
            } else{
                maxValue = Math.max(maxValue, profit)
            }
            j++   
              
       }
       

       return maxValue

        
    }
}
