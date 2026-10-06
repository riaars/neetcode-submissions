class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // sort each str in strs, group in hashmap
        let map = new Map()
        let out =[]
        for(let str of strs){
           let sorted = str.split('').sort().join('')
            if(!map.has(sorted)){
                map.set(sorted, [] )
            }
            map.get(sorted).push(str)
        }

        /*
        map = {
        "act": [act, cat]
        "opst": [pots, stop, tops]
         aht: [hat]
         }
         */

        for(let [key, value] of map){
            out.push(value)
        }

        return out


        
    }
}
