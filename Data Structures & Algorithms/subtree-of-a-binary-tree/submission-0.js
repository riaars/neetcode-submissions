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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        const isSameTree = (p, q) => {
            if(!p && !q) return true
            if((!p && q) || (p && !q)) return false

            return (p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right))
        }

        //we want to check if in each node of root, doing isSameTree with subRoot
        //top-down pattern
        if(!subRoot) return true
        if(!root) return false

        if(isSameTree(root, subRoot)) return true
        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot)        
        

    }
}
