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
var deleteDuplicates = function (head) {
    var runner = head;
    while (runner != null) {
        if (runner.next == null) break;
        if (runner.val == runner.next.val) {
            runner.next = runner.next.next;
        }
        else {
            runner = runner.next
        }
    }
    return head;
};