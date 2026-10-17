class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        let map = {")": "(", "}":"{", "]": "["}
        let stack = []

        for(const c of s) {
            if(c === "(" || c==="[" || c=== "{"){
                stack.push(c)
            } else {
                if(map[c] !== stack.pop()){
                    return false
                }
            }
        }

        

        return stack.length === 0

    /**
     * 
     * stack = ["(", [", "{", ]
     * if( map.get("]") === "[") true
     */
    }
}
