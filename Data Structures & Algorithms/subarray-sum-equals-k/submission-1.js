class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let count = 0
        let map = new Map() // to store prefix and the count
        map.set(0, 1)

        //currentSum - seenSum = k
        //seenSum before, check it occurence
        let currSum = 0
        for(const num of nums){
            currSum+=num
            let seenSum = currSum - k
            count+= (map.get(seenSum) || 0) 
            map.set(currSum, (map.get(currSum) || 0) + 1)

        }


        return count

    }
}
