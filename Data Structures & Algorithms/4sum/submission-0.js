class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        let res = []
        nums.sort((a,b) => a - b)   //-3, 0, 1, 2, 3, 3

        for (let i = 0; i<nums.length; i++){
            if(i > 0 && nums[i] === nums[i-1]) continue
            for(let j = i+1; j<nums.length; j++){
                //make sure no duplicate
                if(j > i + 1 && nums[j] === nums[j - 1]) continue
                //do two pointers
                let left = j + 1
                let right = nums.length - 1

    
                while(left<right){
                    //compare sum and target
                     let sum = nums[i] + nums[j] + nums[left] + nums[right]
                    if(sum === target) {
                        res.push([nums[i], nums[j], nums[left], nums[right]])
                        left++
                        while(left < right && nums[left] === nums[left - 1]) {
                            left++
                        }
                    } else if(sum  < target) {
                        left++
                    } else{
                        right--
                    }

                }
            }
        }

        return res
    }
}
