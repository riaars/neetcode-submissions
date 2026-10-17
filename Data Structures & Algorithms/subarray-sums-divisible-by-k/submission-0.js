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
            count+= map.get((prefixSum%k +k)%k)|| 0
            map.set((prefixSum%k + k)%k, (map.get((prefixSum%k +k)%k) || 0) + 1)
        }

        return count
    }
}
