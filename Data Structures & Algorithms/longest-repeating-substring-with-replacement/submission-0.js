class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

        // idea: find the freq of char in substring
        // replace char with the most freq c in that substring
        // k = substring.length - freq of most frequent char in substring


        // use sliding window
        // shrink window if replacements exceed k
        // return longest

        let i = 0
        let longest = 0
        let map = new Map() //to count occurence

        for(let j = 0; j<s.length; j++){
            map.set(s[j], (map.get(s[j]) || 0) + 1) 
            //get most frequent char in substring --> Math.max(map.values())
            //check if current window valid
            while(j - i + 1 - Math.max(...map.values()) > k){ //this is not valid window
                map.set(s[i],  (map.get(s[i]) || 0) - 1) //we shift left window
                i++
            }   
            
            longest = Math.max(longest, j - i + 1)
         


        }

        return longest


    }
}
