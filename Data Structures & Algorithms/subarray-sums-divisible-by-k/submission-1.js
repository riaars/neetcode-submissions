class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraysDivByK(nums, k) {

        let count = 0
        let map = new Map()
        map.set(0,1)

        let prefixSum = 0

        for(const num of nums){
            prefixSum+=num
            const reminder = (prefixSum%k +k)%k
            count+= map.get(reminder)|| 0
            map.set(reminder, (map.get(reminder) || 0) + 1)
        }

        return count
    }
}
