class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        //idea:
        //check if there is repeated digit in row
        //and check if there is repeated digit in col
        //and check if there is repeated digit in the board area
        //if yes, return false


        //use set to check seen digit

        //board 9x9
        let setRow = new Set()
        let setCol = new Set()
        let setZone = new Set()
        for(let r=0; r<9; r++){
            for(let c=0; c<9;c++){
                const d = board[r][c]
                if(d === '.') continue
                const b = Math.floor(r/3) * 3 + Math.floor(c/3)
                const rowKey = `${r}-${d}`
                const colKey = `${c}-${d}`
                const zoneKey = `${b}-${d}`

                if(setRow.has(rowKey) || setCol.has(colKey) || setZone.has(zoneKey)){
                    return false
                }
                setRow.add(rowKey)
                setCol.add(colKey)
                setZone.add(zoneKey)
            }
        }

        return true


    }
}
