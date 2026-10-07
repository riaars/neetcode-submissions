class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // solution idea 2: grouping number based on frequency
        //bucket index is frequency, each bucket has a list of num
        //freq: 1 2 3  4    5 
        //nums: 1 2 3  null null
        // iterate from the end of group array, by k
        //return

        let map = new Map()
        for(let num of nums) {
            map.set(num, (map.get(num) || 0 ) + 1)
        }

        // create freq array
        let buckets = Array.from({length: nums.length + 1}, () => [])

        for (let [num, count] of map){
            buckets[count].push(num)
        }
        let res = []
        for(let i = buckets.length -1; i > 0; i--){
           for (let num of buckets[i]){
                res.push(num)
                if(res.length ===k ){
                    return res
                }
           }
        }


    }
}
