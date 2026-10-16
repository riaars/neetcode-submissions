class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        // try bottom up dp solution
        // start with the base cases
        //base case
        if(n<=2) return n

        //dp array
        let dp = new Array(n+1).fill(0)
        dp[1] = 1
        dp[2] = 2

       for(let i = 3; i<=n; i++){
            dp[i] = dp[i-1] + dp[i-2]
        }

        return dp[n]

    }
}
