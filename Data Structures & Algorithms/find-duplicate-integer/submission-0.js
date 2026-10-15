class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        // solution 1
        //using hash set, will be O(n) space
        let set = new Set()
        for(const num of nums){
            if(set.has(num)){
                return num
            }
            set.add(num)
        }
    }
}
