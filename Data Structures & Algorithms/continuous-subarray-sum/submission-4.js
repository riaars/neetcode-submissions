class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    checkSubarraySum(nums, k) {
        let map = new Map()
        map.set(0, -1) //store reminder and its index

        let prefixSum = 0

        for(let i = 0; i<nums.length; i++){
            prefixSum+=nums[i]
            let reminder = (prefixSum%k + k)%k
            if(map.has(reminder)) {
                if((i - map.get(reminder)) >= 2) {
                    return true
                }
            } else{
                 map.set(reminder, i)
            }
           
        }

        return false
    }
}
