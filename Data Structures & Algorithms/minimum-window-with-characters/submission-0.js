class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        //idea: find the indexOf first index t found in the s
        // s = "OUZODYXAZV", t = "XYZ"
        //i will find where the index of "Y" in s, then i will use it as left starting
        //use sliding window, extend right
        //use map for checking the count, if its found, if all t char found, then i will splice s starting from left to the right

     //edge cases:

        if(t.length>s.length) return ""

        //add t to map
        let map = new Map()
        for(const c of t) {
            map.set(c, (map.get(c) || 0) + 1)
        }
        //sliding window

        //find left by finding which first s thats exist on the t

        let l = 0
        let missing = t.length
        let bestStart = 0
        let bestLen = Infinity

        
        for(let r = 0 ; r < s.length; r++){
            if(map.get(s[r]) > 0 ){
                missing--
              
            } 
            map.set(s[r], (map.get(s[r]) || 0) - 1)

            while(missing === 0){
                if(r-l + 1< bestLen){
                    bestStart = l
                    bestLen = r-l +1
                }
                map.set(s[l], map.get(s[l]) + 1)

                if(map.get(s[l]) > 0){
                    missing++
                }
                l++
            }
        }

        return bestLen === Infinity ? "": s.slice(bestStart, bestStart + bestLen)


    }
}
