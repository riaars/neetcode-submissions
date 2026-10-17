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
    /**
     * 
     * 0 -> 1 -> 2 -> 3 -> 4
     * 
     * prev -> 1 -> 2
     * 
     */

    let curr = head
    let prev = null

    //iteration while curr

    while(curr){
        //switch
        let tmpNext = curr.next
        curr.next = prev
        prev = curr
        curr = tmpNext
    }

    return prev
    }
}
