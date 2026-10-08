class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack =[]

        let dict = {"]":"[", ")":"(", "}": "{"}

        for(const c of s){
            if(c === '[' || c==='(' || c ==='{'){
                stack.push(c)
            } else if(dict[c] !== stack.pop()){
                 return false
            }

            
        }

        return stack.length === 0
    }
}
