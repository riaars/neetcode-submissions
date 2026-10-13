class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        //idea:
        //check if there is repeated digit in row
        // check if there is repeated digit in col
        // check if there is repeated digit in the board area
        //if at least one condition exist return false, otherwise true


        //use 3 set to check seen digit

        //board 9x9
        let rows = new Set()
        let cols = new Set()
        let squares = new Set()
        for(let r=0; r<9; r++){
            for(let c=0; c<9;c++){
                const d = board[r][c]
                if(d === '.') continue
                const b = Math.floor(r/3) * 3 + Math.floor(c/3)
                const rowKey = `${r}-${d}`
                const colKey = `${c}-${d}`
                const squareKey = `${b}-${d}`

                if(rows.has(rowKey) || cols.has(colKey) || squares.has(squareKey)){
                    return false
                }
                rows.add(rowKey)
                cols.add(colKey)
                squares.add(squareKey)
            }
        }

        return true


    }
}
