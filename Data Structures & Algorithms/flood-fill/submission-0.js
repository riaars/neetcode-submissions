class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {
        //outbound
        const rows = image.length
        const cols = image[0].length
        const initialCell = image[sr][sc] //color of initial cell

        if(initialCell=== color) return image


        const dfs = (r, c) => {
            //stop outbound
            if(r<0 || c <0 ||r>=rows ||c>=cols) return
           
            if(image[r][c] !== initialCell) return //if starting color pixel not the same as initial
            
            image[r][c] = color

            //explore neighbor horizontal and vertical only
            dfs(r, c-1)
            dfs(r, c+1)
            dfs(r-1,c)
            dfs(r+1, c)
          
        }

         dfs(sr, sc)
         return image
    }
}
