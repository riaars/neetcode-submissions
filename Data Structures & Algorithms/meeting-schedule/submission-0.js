/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        
        intervals.sort((a,b) => a.start - b.start) //asc intervals from start it becomes[(0,30),(5,10),(15,20)]

        if(intervals.length === 0) return true
        if(intervals.length === 1) return true
        
        for(let i=1;i<intervals.length; i++){
            if(intervals[i].start < intervals[i-1].end)
                return false
        }

        return true
    }
}
