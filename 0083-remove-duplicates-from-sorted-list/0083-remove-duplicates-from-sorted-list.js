/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let current_node = head;
    while (current_node && current_node.next) {
        if (current_node.next.val == current_node.val) {
            current_node.next = current_node.next.next;
        } else {
            current_node = current_node.next;
        }
    }
    return head;
};