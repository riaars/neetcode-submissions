class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        //sort interval based on start interval
        //compare end of early interval with the start of next interval
        // if end of interval1 is greater or equal than start of interval2, merge them
        //after merge, continue iterate

        intervals.sort((a, b) => a[0] - b[0]) //asc order
        let output = []
        output.push(intervals[0])
        

        for(const interval of intervals){
            const start = interval[0]
            const end = interval[1]
            const lastEnd = output[output.length - 1][1]
          
            if(lastEnd >= start){ //merged
               output[output.length - 1][1] = Math.max(lastEnd, end)
            } else{
                output.push(interval)
            }
            
        }

        return output
    }
}
