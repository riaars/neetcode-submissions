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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode(0) // for result
        let curr = dummy 

        let carry = 0

        while(l1 || l2 || carry > 0){
            let val1 = l1 ? l1.val : 0
            let val2 = l2 ? l2.val: 0

            //do addition
            let sum = val1 + val2 + carry
            carry = Math.floor(sum/10)
            let digit = sum%10

            curr.next = new ListNode(digit)
            curr = curr.next

            //move l1 and l2 pointer

            l1 = l1 ? l1.next : null
            l2 = l2 ? l2.next : null
        }

        return dummy.next
    }
}
