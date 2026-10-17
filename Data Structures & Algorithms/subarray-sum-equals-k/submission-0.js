class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        //since the nums value can be negative, we cant use the sliding window
        //use prefixSum
        //currentPrefixSum - previousPrefixSum = k
        //we store this prefixSum to the map, and count its value

        let count = 0

        let map = new Map()
        //add initial prefixSum
        //prefixSum 0 has been seen once
        map.set(0, 1)

        let prefixSum = 0

        for(const num of nums) {
            prefixSum+=num

            count+= (map.get(prefixSum-k) || 0)
            map.set(prefixSum, (map.get(prefixSum) || 0) + 1 )
        }


        return count
    }
}
