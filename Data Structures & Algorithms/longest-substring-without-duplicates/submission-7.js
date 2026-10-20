class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        //sliding window
        //map for storing seen characters, key is char and value is index
        //substring length is right -  left + 1
        // store the longest


        let left = 0
        let map = new Map()
        let longest = 0

        for(let right = 0; right<s.length; right++){
            //check if s[right] is not on the set
            if(map.has(s[right])){
                left = Math.max(left, map.get(s[right]) + 1) //test for "abba"
            }
            map.set(s[right], right)

            longest = Math.max(longest, right - left + 1)

            
        }

        return longest
    }
}
