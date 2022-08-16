//  * Definition for singly-linked list.
public class ListNode
{
    public int val;
    public ListNode next;
    public ListNode(int val = 0, ListNode next = null)
    {
        this.val = val;
        this.next = next;
    }
}

public class Solution2
{
    public ListNode AddTwoNumbers(ListNode l1, ListNode l2, int carry = 0)
    {
        if (l1 == null && l2 == null && carry == 0) return null;
        if (l1 == null && l2 == null && carry == 1) return new ListNode(1);
        var n1 = l1 != null ? l1.val : 0;
        var n2 = l2 != null ? l2.val : 0;
        var num = n1 + n2 + carry;
        var sum = new ListNode(num % 10);
        sum.next = AddTwoNumbers(l1?.next, l2?.next, num / 10);
        return sum;
    }
}