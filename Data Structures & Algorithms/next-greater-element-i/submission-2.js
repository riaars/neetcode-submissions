class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
       //stack solution
       let res = new Array(nums1.length).fill(-1)
       let stack = []
       let map = new Map() //store nums2 num and its next greater value

        for(const num of nums2){
            while(stack.length !==0 && num > stack[stack.length -1]){
                const val = stack.pop()
                map.set(val, num)

            }
            stack.push(num)
        }

        console.log(map)

        for (let i = 0; i<nums1.length;i++){
           res[i] = map.get(nums1[i]) ?? -1
        }

        return res
       
    }
}
