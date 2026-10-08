class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s.length ===0) return 0

        let i = 0
        let j = 0
        let max = 0

        let set = new Set()
        for(j=0; j< s.length;j++){
            while(set.has(s[j])){
                set.delete(s[i])
                i++
            }
            set.add(s[j])
            max = Math.max(max, j-i + 1)  
        }

        return max
    }
}
