class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // idea 2 sort asc the array
        // skip if adjacent num found
        // use two pointers, left and right, 
        // if nums[i] + nums[left] + nums[right] === 0, push to result, update left and right index, check if next nums[left] is adjacent, skip
        // if nums[i] + nums[left] + nums[right] > 0 left-- right++
        // if nums[i] + nums[left] + nums[right] < 0 right-- left++
        // return res

        let res =[]
        let sorted = nums.sort((a, b) => a - b) // [-4, -1, -1, 0, 1, 2]
        let n = sorted.length // 6
 
        for(let i = 0; i<n -2  ;i++){
            if(i> 0 && sorted[i] === sorted[i - 1]) continue
            
            let left = i + 1
            let right = n - 1

            while(left<right){
             let sum = nums[i] + nums[left] + nums[right]
                if(sum === 0){
                    res.push([nums[i], nums[left], nums[right]])
                    left++
                    right--
                    while(left< right && nums[left] === nums[left-1]) left++
                } else if(sum < 0){
                    left++
                } else{
                    right--
                }
            }

        }

        return res

    }
}

