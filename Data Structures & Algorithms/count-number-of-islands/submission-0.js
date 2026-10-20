class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const rows = grid.length
        const cols = grid[0].length
        let count = 0
        

        const dfs =(r, c) => {
            //outbound
            if(r<0||c<0 ||r>=rows ||c>=cols) return
            if(grid[r][c] !=='1') return

            //mark already visited island as 0
            grid[r][c] = '0'

            //check adjacent
            dfs(r, c+1)
            dfs(r, c-1)
            dfs(r+1, c)
            dfs(r-1, c)
        }

        for(let i = 0; i<rows; i++){
            for (let j = 0; j<cols; j++){
                if(grid[i][j] ==='1')
                    count++
                    dfs(i, j) //mark visited cell and adjacent as 0
            }
        }

        return count

    }

    
}
