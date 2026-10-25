class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length>s2.length) return false
        //use sliding window for s2, compare its frequency of the char on the window with s1
        //permutation, check the frequency of each char is the same no matter order

        //window size of s2 when doing sliding window should be size of s1

        //we can use 2 hashmap, check frequency of each char and 1 array to check how many characters map
        //if we ever get 26, then it will return true

        const s1Count = new Array(26).fill(0)
        const s2Count = new Array(26).fill(0)
        let matches = 0
        for(let i = 0; i<s1.length; i++){
            s1Count[s1.charCodeAt(i) - 97]++
            s2Count[s2.charCodeAt(i) - 97]++
        }

        for(let i = 0; i<26; i++){
            matches+= (s1Count[i] === s2Count[i] ? 1 : 0)
        }

        let left = 0

        for(let right = s1.length; right<s2.length; right++){
            if(matches === 26) return true
            let index = s2.charCodeAt(right) - 97
            s2Count[index]++
            if(s1Count[index] === s2Count[index]) {
                matches++
            } else if(s1Count[index] + 1 == s2Count[index]){
                matches--
            } 

            index = s2.charCodeAt(left) - 97
            s2Count[index]--
            if(s1Count[index] === s2Count[index]){
                matches++
            } else if(s1Count[index] - 1 === s2Count[index]){
                matches--
            }
            left++
        }

        return matches === 26

    }
}
