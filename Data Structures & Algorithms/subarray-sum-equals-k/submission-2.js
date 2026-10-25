class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        //use prefixSum and its frequent map
        //initiate with prefixSum of first index which 0, 1

        let map = new Map()
        map.set(0, 1)
        let count = 0
        let currSum = 0

        for(const num of nums){
            //k = currSum - prefixSum
            //find out prefixSum and its frequency
            currSum+= num
            count+= map.get(currSum-k)||0
            map.set(currSum, (map.get(currSum) || 0) + 1)

        }

        return count
    }
}
