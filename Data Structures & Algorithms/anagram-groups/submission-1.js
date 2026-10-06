class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // sort each str in strs, group in hashmap
        let map = new Map()
        for(let str of strs){
           let sorted = str.split('').sort().join('')
            if(!map.has(sorted)){
                map.set(sorted, [] )
            }
            map.get(sorted).push(str)
        }

      
        return [...map.values()]


        
    }
}
