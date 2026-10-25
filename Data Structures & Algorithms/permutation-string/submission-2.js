class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        //solution 2: sort both string, and do sliding window on s2

        if(s1.length>s2.length) return false

        const sorted1 = s1.split("").sort().join("")
        const k = s1.length

        for(let i = 0; i<=s2.length-k;i++){
            const window = s2.slice(i, i+k).split("").sort().join("")
            if(sorted1 === window) return true
        }

        return false
    }
}
