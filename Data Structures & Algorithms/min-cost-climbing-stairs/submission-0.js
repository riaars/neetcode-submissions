class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        if(cost.length === 0) return 0
        if(cost.length === 1) return cost[0]

        //dp
        //dp[i]=minimum cost to reach the stairs i
        const dp = new Array(cost.length+1).fill(0)
        dp[0] = 0
        dp[1] = 0

        for(let i = 2; i< cost.length + 1; i++){
            dp[i] = Math.min(cost[i-1] + dp[i-1], cost[i-2] + dp[i-2])
        }

        return dp[cost.length]
    }
}
