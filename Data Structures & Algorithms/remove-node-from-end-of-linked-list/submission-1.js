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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        //idea 2: use two pointers, where second pointer is first pointer + n

        let dummy = new ListNode(0, head)
        let left = dummy
        let right = head

        // we want to shift right until the distance between left and right is n

        while(n>0 && right){
            right = right.next
            n-=1
        }

        // now shift both left and right until right reaching the end of list, if right reaching the end of list, meaning left is on n position from the end
        while(right){
            left = left.next
            right = right.next
        }

        // delete the node on position
        left.next = left.next.next

        return dummy.next
        

      
    }
}
