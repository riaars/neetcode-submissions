class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0
        let right = heights.length - 1

        let maxArea = 0

        while(left < right){
            let area = (right - left) * Math.min(heights[left], heights[right])
            maxArea = Math.max(maxArea, area)
            // move the pointer
            if(heights[left] <= heights[right]){
                left++
            } else{
                right--
            }
        }

        return maxArea
    }
}

//test [1,7,2,5,4,7,3,6]
/**
 * 7-0 * 1 = 7
 * 7-1 * 6 = 36
 */
