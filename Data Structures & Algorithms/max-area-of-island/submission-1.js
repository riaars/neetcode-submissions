class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        //dfs
        const rows = grid.length
        const cols = grid[0].length
        let maxArea = 0

        const dfs =(r,c) => {
            //check outbound
            if(r<0 || c<0 || r>=rows || c>=cols) return 0

            //not walkable 
            if(grid[r][c] !== 1) return 0

            //flip (marked as visited)
            grid[r][c] = 0

            //return the area
            return 1 + dfs(r, c +1) + dfs(r, c-1) + dfs(r-1, c) + dfs(r+1,c)

        }

        //outer loop

        for(let i = 0; i<rows; i++){
            for(let j = 0; j<cols; j++){
                    maxArea = Math.max(maxArea, dfs(i,j))
                
            }
        }

        return maxArea
    }
}
