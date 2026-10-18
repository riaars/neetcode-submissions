class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        //two pointers

        let left = 0
        let right = heights.length - 1
        let max = 0

        while(left<right){
            let width = right - left 
            let maxArea = Math.min(heights[right], heights[left])* width
            max = Math.max(max, maxArea)

            //move our pointers
            if(heights[right]>= heights[left]){
                left++
            } else {
                right--
            }
        }

        return max


    /**
     * [2, 2, 2]
     * maxArea = 4
     * 
     */
    }
}
