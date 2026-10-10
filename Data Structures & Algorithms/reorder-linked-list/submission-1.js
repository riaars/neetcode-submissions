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
       //idea 2: split the list into 2 using slow and fast pointer, and then reverse the second part then merge again by alternating

       // split the list into 2 part using slow and fast

       let slow = head
       let fast = head.next

       while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
       }

       // we wil get the second, start from slow.next
       // reverse second half list
       // use prev
       let second = slow.next
       let prev = slow.next = null
       while(second){
        let tmp = second.next
        second.next = prev
        prev= second
        second = tmp
       }

       //merge again first half and the reversed second half
       let first = head
       second = prev
       while(second){
        let tmp1 = first.next
        let tmp2 = second.next
        first.next = second
        second.next = tmp1
        first = tmp1
        second =  tmp2
       }

    }
}
