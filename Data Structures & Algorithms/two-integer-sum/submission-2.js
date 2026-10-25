class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //use hashmap to store nums and its index
        const map = new Map()
        for(let i = 0; i<nums.length; i++){
            let diff = target - nums[i]
            if(map.has(diff)){
                return [i, map.get(diff)]
            } 
            map.set(nums[i], i)
            

        }


    }
}
