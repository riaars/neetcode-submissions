class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        //use dfs to check detection
        //we gonna use hashmap, mapping course and its prerequisited
        //to detect if there is cycle, we will use set


        let map = new Map()
        //initiate the map and its array
        for(let i = 0; i<numCourses;i++){
            map.set(i, [])
        }
        for(const[crs, pre] of prerequisites){
            map.get(crs).push(pre)
        }

        //use set to store all courses
        const visiting = new Set()

        const dfs =(crs) => {
            if(visiting.has(crs)){
                return false //cycle detected
            }

            if(map.get(crs).length === 0){
                return true
            }

            visiting.add(crs)
            for(let pre of map.get(crs)){
                if(!dfs(pre)){
                    return false
                }
            }
            visiting.delete(crs)
            map.set(crs, [])
            return true
        }

        //outer loop

        for(let c = 0; c<numCourses; c++){
            if(!dfs(c)){
                return false
            }
        }

        return true
    }
}
