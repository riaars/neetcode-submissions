class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        //create adjacency list map
        const map = new Map()
        for(let i = 0; i< numCourses; i++){
            map.set(i, [])
        }

        for(const[crs, pre] of prerequisites){
            map.get(crs).push(pre)
        }

        const visited = new Set()
        const cycle = new Set()
        let output = []

        const dfs = (crs) => {
            if(cycle.has(crs)) return false
            if(visited.has(crs)) return true

            cycle.add(crs)
            for(const pre of map.get(crs)){
                if(!dfs(pre)) return false
            }
            cycle.delete(crs)
            visited.add(crs)
            output.push(crs)
            return true
        }

        for(let c =0; c<numCourses; c++){
            if(dfs(c) === false)
                return []
        }

        return output
    }
}
