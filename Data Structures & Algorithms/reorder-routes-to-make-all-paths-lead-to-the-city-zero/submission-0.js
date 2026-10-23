class Solution {
    /**
     * @param {number} n
     * @param {number[][]} connections
     * @returns {number}
     */
    minReorder(n, connections) {
        let output = 0
        const graph = Array.from({length: n}, () => [])
        for (const [u,v] of connections){
            graph[u].push([v, 1])
            graph[v].push([u, 0])
        }
        const stack = [[0, -1]]

        while(stack.length){
            const [node, parent] = stack.pop()
            for(const[next, cost] of graph[node]){
                if(next!==parent){
                    output+=cost
                    stack.push([next, node])
                }
            }
        }

        return output 
     


    }
}
