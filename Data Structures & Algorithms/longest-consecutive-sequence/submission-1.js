class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
    /*
    - add all to the set 
    - find the first index, if it is first index, if not first index skip, if yes, count add 1, and if found again, count added
    - store longest value
    - 
    */ 
    let set = new Set()
    let longest = 0
    for(const num of nums){
        set.add(num)
    }


    // iterate the nums again, find the first index, and the check sequence
    for(const num of set){
        let streak = 1
         // check if it is first index
        if(!set.has(num - 1)){ 
           let curr = num
           while(set.has(curr + 1)){
             streak++
             curr=curr+1
           }
        }
        longest = Math.max(streak, longest)
    }

    return longest

    }
}
