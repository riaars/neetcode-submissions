class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
    /*
    - add all to the set 
    - find the first index, if it is first index, we continue search of next sequence, we update streak, if its not first index, we will not continue,
    - store longest value
    - 
    */ 
    let set = new Set(nums)
    let longest = 0


    // iterate the nums again, find the first index, and the check sequence
    for(const num of set){
        if(set.has(num - 1)) continue // skip if its not first index
         // check if it is first index
        if(!set.has(num - 1)){   
            let curr = num
            let streak = 1
            while(set.has(curr + 1)){
                streak++
                curr++
            }
         longest = Math.max(streak, longest)
        }
        
    }

    return longest

    }
}
