/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        //idea 1: put it into the array and sort the array

        const dfs=(node, arr) => {
            if(!node) return
            arr.push(node.val)
            dfs(node.left, arr)
            dfs(node.right, arr)
        }

        const arr = []
        dfs(root, arr)
        arr.sort((a,b) => a-b)
        return arr[k-1]
    }
}
