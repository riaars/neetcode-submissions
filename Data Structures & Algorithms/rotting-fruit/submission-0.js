class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const rows = grid.length
        const cols = grid[0].length
        const directions = [[1,0], [-1, 0], [0, 1], [0, -1]]
        let minutes = 0

        //initiate the queue and visited
        const queue = []
        const visited = new Set()
        let fresh = 0

        for(let i=0;i<rows; i++){
            for (let j=0; j<cols;j++){
                if(grid[i][j] === 1) {
                    fresh++
                }
                if(grid[i][j] === 2) {
                    queue.push([i, j])
                    visited.add(`${i},${j}`)
                }
              
            }
        }


        while(queue.length && fresh>0){
            const levelSize = queue.length
            for(let i = 0; i<levelSize; i++){
                const [r,c] = queue.shift()
                //check all 4 adjacent
                for(const [dr, dc] of directions){
                    const nr = r + dr
                    const nc = c + dc

                    //check outbound
                    if(nr<0 || nc<0 || nr>=rows|| nc>=cols) continue
                    //already seen
                    if(visited.has(`${nr},${nc}`)) continue

                    //not walkable (empty cell is not continue)
                    if(grid[nr][nc] === 0) continue

                    if(grid[nr][nc] === 1){
                        fresh--
                    }

                    //mark as visited
                    visited.add(`${nr},${nc}`)
                    queue.push([nr, nc])
                }
             
            }
             minutes++
           
        }

        return fresh>0? -1 : minutes


    }
}
