class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        //dp problem: max amount money to rob houses, arr[0] & arr[arr.length-1] is adjacent
        
        const robLines =(nums) => {
        //base  
            if(nums.length === 1) return nums[0]

            //create dp array
            const dp = new Array(nums.length).fill(0)
            //max amount money robbing 
            dp[0] = nums[0]
            dp[1] = Math.max(nums[0], nums[1]) //only can rob one of the houses


            for(let i = 2; i<nums.length;i++){
                dp[i] = Math.max(dp[i-1], nums[i] + dp[i-2])
            }

            return dp[nums.length - 1]

        }

        if(nums.length === 0) return 0
        if(nums.length === 1) return nums[0]

        return Math.max(robLines(nums.slice(0, nums.length-1)), robLines(nums.slice(1)))


    }
}
