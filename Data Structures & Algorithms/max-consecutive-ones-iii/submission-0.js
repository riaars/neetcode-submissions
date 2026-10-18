class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    longestOnes(nums, k) {
        let longest = 0

        let i = 0
        let countZero = 0

        for(let j=0; j<nums.length; j++){   
            if(nums[j] === 0){
                countZero++
            }
            
            //shrink window if not valid
            while(countZero > k){
                if(nums[i] === 0){
                    countZero--
                }
                i++
            }

            longest = Math.max(longest, j - i + 1)
        }

        return longest
    }
}
