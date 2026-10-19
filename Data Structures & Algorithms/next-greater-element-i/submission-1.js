class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        //brute force
        let res = []
        for(const num1 of nums1){
            //find where num1 in nums2
            const i = nums2.indexOf(num1)

            //scan to the right of first bigger number
            let next = -1
            for(let j = i + 1; j<nums2.length; j++){
                if(nums2[j] > num1){
                     next = nums2[j]
                     break
                }
            }
            res.push(next)
        }

        return res
    }
}
