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
     * @return {ListNode}
     */
    reverseList(head) {
        //use recursive

        /**
         * 0 -> 1 -> 2 -> 3 -> 4
         * idea: reverse only the first element, then the curr.next is the reversed tails
         * 
         * head: 0
         * head + reversed ;0 4,3,2,1
         * 
         */


        if(!head || !head.next) return head
        
        const reversed = this.reverseList(head.next)
        head.next.next= head
        head.next = null
        

        return reversed
    }
}
