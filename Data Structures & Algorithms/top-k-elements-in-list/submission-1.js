class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // solution idea 1:
        // use hashmap to store the frequency
        // sort the map based on frequency
        // get the first top k
        // return the array

        let map = new Map()
        let out = []

        for (let num of nums){
            map.set(num, (map.get(num) || 0 ) + 1)
        }

        /**
         * map = {
         * 1: 1
         * 2: 2
         * 3: 3}
         * 
         */

        // sort map entries directly based on frequency
        let sorted = [...map.entries()].sort((a, b) => b[1] - a[1])
       
        for(let i = 0; i < k; i++){
            out.push(sorted[i][0])
        }

        return out
    }
}
