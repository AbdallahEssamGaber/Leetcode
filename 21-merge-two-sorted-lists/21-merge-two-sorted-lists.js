/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (!size(list1) && !size(list2)) return new ListNode().val = null;
    let node, node1, node2, list1Temp = list1, list2Temp=list2;
    while (list1Temp || list2Temp) {
        if (!list1Temp && list2Temp) {
            if (size(node) <= 0) return list2Temp;
            else getLast(node).next = list2Temp;

            break;
        } else if (!list2Temp && list1Temp) {
            if (size(node) <= 0) return list1Temp;
            else getLast(node).next = list1Temp;

            break;
        }

        if (list1Temp.val > list2Temp.val){
            if (size(node) <= 0) node = new ListNode(list2Temp.val);  
            else {
                node1 = new ListNode(list2Temp.val);
                getLast(node).next = node1;
            }

            list2Temp = list2Temp.next;

        } else if (list1Temp.val < list2Temp.val) {
            if (size(node) <= 0) node = new ListNode(list1Temp.val);
            else {
                node1 = new ListNode(list1Temp.val);
                getLast(node).next = node1;
            }

            list1Temp = list1Temp.next;

        } else {
            if (size(node) <= 0) {
                node = new ListNode(list1Temp.val);
                node1 = new ListNode(list2Temp.val);
                node.next = node1;
            } 
            else {
                node1 = new ListNode(list1Temp.val);
                node2 = new ListNode(list2Temp.val);
                node1.next = node2;
                getLast(node).next = node1;
            }
            list1Temp = list1Temp.next;
            list2Temp = list2Temp.next;
        }
    }
    
    
    return node;

};



function size(head) {
    let count = 0; 
    let node = head;
    while (node) {
        count++;
        node = node.next
    }
    return count;
}


function getLast(head) {
    let lastNode = head;
    if (lastNode) {
        while (lastNode.next) {
            lastNode = lastNode.next
        }
    }
    return lastNode
}