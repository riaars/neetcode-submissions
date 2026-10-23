class Solution {
    /**
     * @param {number} n
     * @param {number[][]} connections
     * @returns {number}
     */
    minReorder(n, connections) {
        //remember real roads
        let roads = new Set()

        //create undirected graph
        let graph = Array.from({length: n}, ()=> [])
        for(const [u,v] of connections){
            roads.add(`${u},${v}`)
            graph[u].push(v)
            graph[v].push(u)
        }

        //store visited city
        let visited = new Array(n).fill(false)
        let flips = 0

        const stack = [0]
        visited[0] = true

        while(stack.length){
            const city = stack.pop()
            for(const neighbor of graph[city]){
                if(!visited[neighbor]){
                    if(roads.has(`${city},${neighbor}`)){
                        flips++
                    }
                    visited[neighbor] = true
                    stack.push(neighbor)
                }
            }
        }

        return flips
     


    }
}
