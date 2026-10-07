class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length
       // use prefix and postfix
       let prefix = Array(nums.length).fill(1)
       let postfix = Array(nums.length).fill(1)
       let res =[]

       for(let i = 1; i<n; i++ ){
        prefix[i] = prefix[i-1]* nums[i-1]
       }

       for(let j = n-2; j>=0; j--){
        postfix[j] = postfix[j+1]* nums[j+1]
       }

       for(let i = 0;i<n; i++){
         res[i] = prefix[i]* postfix[i]
       }

     

    return res

    }
}
