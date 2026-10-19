class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        //sorted: use two pointers

        let left = 0
        let right = numbers.length - 1

        while(left<right){
            let sum = numbers[left] + numbers[right]
            if(sum>target){
                right--
            } else if(sum < target){
                left++
            } else{
                return [left + 1, right + 1] // because of 1-indexed
            }
        }
    }
}
