class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        //sort the nums
        //use the two pointers for finding the other two
        let res = []
        nums.sort((a, b) => a - b) //asc sort [-4,-1,-1,0, 1, 2]

        for(let i = 0; i<nums.length; i++){     
            //do skip
            if(i> 0 &&  nums[i]=== nums[i-1]) continue       
            let left = i + 1
            let right = nums.length - 1
            while(left < right){
                let sum = nums[i] + nums[left] + nums[right]
                if(sum === 0) {
                    res.push([nums[i], nums[left], nums[right]])
                    //move pointers
                    left++
                    while(left<right && nums[left] === nums[left - 1]) left++
                } else if(sum > 0) {
                    right--
                } else{
                    left++
                }
            }
        }
        return res
    }
}
