class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        //sliding window
        //set for storing seen characters 
        //substring length is right -  left + 1
        // store the longest


        let left = 0
        let set = new Set()
        let longest = 0

        for(let right = 0; right<s.length; right++){
            //check if s[right] is not on the set
            while(set.has(s[right])){
                set.delete(s[left])
                left++
            }
            set.add(s[right])

            longest = Math.max(longest, right - left + 1)

            
        }

        return longest
    }
}
