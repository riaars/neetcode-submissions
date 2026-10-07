class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

       // use prefix and postfix

       let res = Array(nums.length).fill(1)

       let prefix = 1

       for(let i = 0; i< nums.length; i++){
        res[i] = prefix
        prefix*= nums[i]
       }

       let postfix = 1
       for(let j= nums.length -1; j>=0; j--){
        res[j]*= postfix
        postfix*= nums[j]
       }

    return res

    }
}
