class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
       //solution 2: top down with memo

      let memo = new Map()

      const climb =(i) => {
        if(i<=2) return i
        if(memo.has(i)) return memo.get(i)
        const result = climb(i-1) + climb(i-2)
        memo.set(i, result) 

        return result
      }

      return climb(n)

    }
}
