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
        //idea 1: index to remove is index at length - n from the beginning, skip the node if found that index

        let curr = head
        let length = 0
        while(curr){
            length++
            curr = curr.next
        }

        // iterate list until index length - n
        if (n === length) return head.next
        
        let prev = head
        for(let i=0;i<length-n-1; i++){
            prev = prev.next
        } 

        prev.next = prev.next.next

        return head
    }
}
