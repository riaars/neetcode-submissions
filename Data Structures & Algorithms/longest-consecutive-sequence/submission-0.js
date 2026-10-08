class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums)
        let longest = 0

        for(let num of set){
            
             //check if its first index
            if(!set.has(num - 1)){
                let curr = num
                let length = 1
                //check if all curr + 1 exist in the set
                while(set.has(curr + 1)){
                    curr ++
                    length++
                }

                longest = Math.max(longest, length)
            } 
        }

        return longest
    }
}
