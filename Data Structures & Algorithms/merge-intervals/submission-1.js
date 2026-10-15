class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        //sort based on the starting intervals
        intervals.sort((a,b) => a[0]- b[0]) //asc order
        let res = [intervals[0]]

        for(let i = 1; i<intervals.length; i++){
            let lastEnd = res[res.length - 1]
            const [start, end] = intervals[i]

            if(start<=lastEnd[1]){
                lastEnd[1] = Math.max(lastEnd[1], end)
            } else {
                res.push([start, end])
            }
        }
      return res
    }
}
