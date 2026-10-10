/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let stack = []
        let curr = head
        let node = head

        // add item to stack

        while(curr){
            stack.push(curr)
            curr = curr.next
        }

        //compare node with the last index of stack, if not the same keep moving
        let n = stack.length
        for(let i=0;i<(Math.floor(n/2));i++){
            const tail = stack.pop()
            const next = node.next
            node.next = tail
            tail.next = next
            node = next
        }

        node.next = null

        return head

    }
}
