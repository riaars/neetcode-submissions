/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        const oldNew = new Map()

        const clone =(node, oldNew) => {
            if(!node) return null

            if(oldNew.has(node)){
                return oldNew.get(node)
            }
            let copy = new Node(node.val)
            oldNew.set(node, copy)

            for(const neigh of node.neighbors){
                copy.neighbors.push(clone(neigh, oldNew))
            }

            return copy
        }

        return clone(node,oldNew)
    }
}
