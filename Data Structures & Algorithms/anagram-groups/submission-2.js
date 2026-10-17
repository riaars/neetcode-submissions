class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map()
        for(const str of strs){
            let sorted = str.split("").sort().join("")
            if(!map.has(sorted)){
                map.set(sorted, [])
            } 

            map.get(sorted).push(str)

            
        }

        return [...map.values()]
    }

    //testing
    /**
     * act
     * map = {act: [act, cat], opts: [pots, tops, stop]}
     */
}
