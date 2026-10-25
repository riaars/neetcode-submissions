class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        //idea: sort nums
        //find fix index, if next index is the same, skip
        //for the rest of two, do two pointers

        let res = []
        nums.sort((a,b) => a - b) //-4, -1,-1, 2,2 0, 1, 5

        for(let i = 0; i<nums.length; i++){
            let left = i+1
            let right = nums.length - 1

            if(i>0 && nums[i] === nums[i-1]) continue

            //two pointers here
            while(left<right){
                let sum = nums[i] + nums[left] + nums[right]
                if(sum === 0){
                    res.push([nums[i], nums[left], nums[right]])
                    left++
                    while(left<right && nums[left] === nums[left-1]) left++
                } else if(sum<0){
                    left++
                } else{
                    right--
                }
            }
        }

        return res

    }
}
