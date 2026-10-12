class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        // brute force
        let count = 0
        let targetSum = k*threshold //minimalSum
        let currentSum = 0

        for(let i=0;i<k;i++){
            currentSum+=arr[i] 
        }

        //check if currentSum is subArray
        if(currentSum>= targetSum){
            count++
        }

        //newCurrentSum =currentSum + arr[i] - arr[i-k]
        for(let i=k; i<arr.length;i++){
            currentSum = currentSum + arr[i] - arr[i-k]
             if(currentSum>= targetSum){
                count++
             }
        }

        return count
        
    }
}
