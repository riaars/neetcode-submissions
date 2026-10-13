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
     * @return {boolean}
     */
    isValidBST(root) {

        //idea: valid bst if left.val < root.val and right.val > root.val
        // if(!root) {
        //     return true
        // } else
        //   {
        //     if(!root.left) return false
        //     if(!root.right) return false
        //     if(!root.left && !root.right) return true
        //   }

    
        // if (root.left.val < root.val && root.right.val> root.val) return true

        // return this.isValidBST(root.left) && this.isValidBST(root.right)

        const dfs =(node, min, max) => {
            if(!node) return true

            if(!(min < node.val && node.val < max)){
                //not valid
                return false
            }

            return (dfs(node.left, min, node.val) && dfs(node.right, node.val, max))
        }

        return dfs(root, -Infinity, Infinity)

    }
}
