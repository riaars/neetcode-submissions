class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        //idea: sort each str, and use it as a key
        // use hashmap, key is the sorted one, and the values are array of the findings
        //then print the result based on values, map it into array

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
}
