class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        //idea: use map
        //sort map based on frequency
        //return top k
        const map = new Map()
        let res = []
        for(const num of nums){
            map.set(num, (map.get(num) || 0) + 1)
        }

        //sort desc the map based on freq 
       let sorted = [...map.entries()].sort((a, b) => b[1] - a[1])
       
       //get top k

       for(let i = 0; i<k; i++){
        res.push(sorted[i][0])
       }

       return res

    }
}
