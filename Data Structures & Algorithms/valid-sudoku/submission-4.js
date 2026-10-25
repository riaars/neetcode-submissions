class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        //have 3 sets, row, col, and box

        const rows = new Set()
        const cols = new Set()
        const boxes = new Set()

        for(let r = 0; r<board.length; r++){
            for(let c = 0; c<board[0].length; c++){
                const cell = board[r][c]
                
                if(cell === '.') continue
                const b = Math.floor(r/3) * 3 + Math.floor(c/3)
                const rowKey = `${r}-${cell}`
                const colKey = `${c}-${cell}`
                const boxKey = `${b}-${cell}`

                if(rows.has(rowKey) || cols.has(colKey) || boxes.has(boxKey)) return false

                rows.add(rowKey)
                cols.add(colKey)
                boxes.add(boxKey)


                
            }


        }

        return true
    }
}
