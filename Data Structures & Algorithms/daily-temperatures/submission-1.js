class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
      //stack
    
    let stack = [] //store the index only is enough
    let res = new Array(temperatures.length).fill(0)
  
    for(let i = 0; i<temperatures.length; i++){
        while(stack.length && temperatures[i] > temperatures[stack[stack.length-1]]){
            const j = stack.pop()
            res[j] = i - j
        
        } 
        stack.push(i)
      
    }
      return res
}
}
