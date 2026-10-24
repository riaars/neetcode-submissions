class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        //bfs
        //iterate all rotten oranges at once
        //count the fresh one, if rotten, put it to queue


        const rows = grid.length
        const cols = grid[0].length
        const directions = [[1,0], [-1, 0], [0, 1], [0, -1]]
        let fresh = 0
        let minutes = 0

        let queue = []

        for (let i =0; i < rows; i++){
            for(let j =0; j<cols; j++){
                if(grid[i][j] === 1){
                    fresh++
                }
                if(grid[i][j] === 2){
                    queue.push([i, j])
                    
                }
            }
        }

        //bfs to check rotten, and flip adjacent to rotten

        while(queue.length && fresh>0){
            const size = queue.length
            for(let k = 0; k<size; k++){
                 const [r,c] = queue.shift() //remove queue first element
           
                //iterate all neighbors
                for( const [dr, dc] of directions){
                    const nr = r + dr
                    const nc = c + dc
                    //check outbound

                    if(nr<0 || nc<0 ||nr>=rows || nc>= cols){
                        continue
                    }
                    //not walkable
                    if(grid[nr][nc] === 0) continue

                    //flip if found fresh, reduce fresh count
                    if(grid[nr][nc] === 1){
                        grid[nr][nc] = 2
                        fresh--
                        queue.push([nr,nc])
                    }
                

                    
                }
             
            }

            minutes++
           
            
          

        }

        return fresh > 0 ? -1 : minutes
    }
}
