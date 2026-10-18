class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        //sliding window
        //replace the character with the character that has biggest count
        //if replacement result is less than k, we keep doing it valid
        //else reduce the count of that character, and move left pointer by one 
        //do max k replacement


        let i = 0
        let longest = 0
        let map = new Map()

        for(let j=0;j<s.length;j++){
            map.set(s[j], (map.get(s[j]) || 0) + 1)

            //check if window is valid
            //window is valid is the window - max of chart <= k

            while(j - i + 1 - Math.max(...map.values()) > k){
                //if window not valid, we need to shrink the window
                map.set(s[i], (map.get(s[i]) || 0) - 1)
                i++
            }

            longest = Math.max(longest, j-i+1)
        }

        return longest
      

    }
}
