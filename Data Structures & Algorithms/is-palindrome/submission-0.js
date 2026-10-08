class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // cleanup string, make it lowercase, remove all non alphanumerics char
        // split string into array
        // use two pointers, left and right
        // return false if found string at left !== string at right pointer

        let arr = (s.toLowerCase()).replace(/[^a-zA-Z0-9]/g, "").split("")
        console.log(arr)

        let left = 0
        let right = arr.length - 1

        while(left<right){
            if(arr[left]!== arr[right]){
                return false
            } else{
                left++
                right--
            }
        }

        return true

        

    }
}
