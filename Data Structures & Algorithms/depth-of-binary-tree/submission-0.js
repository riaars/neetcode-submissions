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
     * @return {number}
     */
    maxDepth(root) {
        //bottom-up
        if(!root) return 0
        if(!root.left) {
            return 1 + this.maxDepth(root.right)
        } else if(!root.right) {
            return 1 + this.maxDepth(root.left)
        }

        return 1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right))

    }
}
