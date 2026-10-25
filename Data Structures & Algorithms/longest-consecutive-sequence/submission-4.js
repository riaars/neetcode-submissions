class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        //put all the nums into set
        //iterate through all set
        //check if it is the first index, if yes, do check next value,
        //store the longest

        let set = new Set(nums)
        let longest = 0

        for(const num of set){
            //check if num is the first index, meaning no num - 1 exist
            if(!set.has(num - 1)){
                let streak = 1
                let curr = num
                while(set.has(curr + 1)){
                    streak++
                    curr++
                }

                longest = Math.max(longest, streak)
            } 
           
        }

        return longest
    }
}
