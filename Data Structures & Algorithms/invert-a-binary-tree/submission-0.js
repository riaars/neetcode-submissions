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
     * @return {TreeNode}
     */
    invertTree(root) {
    //bottom-up pattern
        if(!root) return null
        //swap left and right
        let tmp = root.left
        root.left = root.right
        root.right = tmp

        //recursive left and right
        this.invertTree(root.left)
        this.invertTree(root.right)

        return root
       
    }
}
