class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set()
        let longest = 0
        let left = 0

        for(let right = 0; right<s.length;right++){
           
            while(set.has(s[right])){
                set.delete(s[left])
                left++
            }
            set.add(s[right])
            longest = Math.max(longest, right - left + 1)
            }

        return longest

    /**
     * set: {z, x, y}
     * z
     * longest: 1, 2, 3
     * 
     */

    }
}
