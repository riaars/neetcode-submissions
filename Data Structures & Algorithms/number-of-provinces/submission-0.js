class Solution {
    /**
     * @param {number[][]} isConnected
     * @return {number}
     */
    findCircleNum(isConnected) {
        //since this is number of group -> dfs

        const n = isConnected.length
        const visited = new Array(n).fill(false) 
        let provinces = 0

        const dfs=(city) => {
            //mark visited
            visited[city] = true
            //loop possible neighbor
            for(let j = 0; j<n;j++){
                if(isConnected[city][j] ===1 && visited[j] ===false){
                    dfs(j)
                }
            }
            
        }

        for(let i = 0; i<n; i++){
            if(visited[i] === false){
                 provinces++
                 dfs(i)
            }
        }

        return provinces
    }
}
