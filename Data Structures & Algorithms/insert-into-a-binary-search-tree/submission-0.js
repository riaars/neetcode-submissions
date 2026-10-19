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
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root, val) {
        let nodeVal = new TreeNode(val)
        if(!root) return nodeVal
        
        //compare value with root first, and check if we will insert left or right
        if(val<=root.val){
            root.left = this.insertIntoBST(root.left, val)
        }else{
            root.right = this.insertIntoBST(root.right, val)
        }

        return root

       
    }
}
