import util.ListNode;

public class Sum2Numbers {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode headNode = new ListNode(0);
        ListNode  p = l1, q = l2, curr = headNode;
        
        int carry = 0;
        
        while (p != null || q != null) {
            int x = (p != null) ? p.val : 0;
            int y = (q != null) ? q.val : 0;
            
            int sum = x + y + carry;
            
            carry = sum / 10;
            
            curr.next = new ListNode(sum % 10);
            
            curr = curr.next;
            
            if (p != null) p = p.next;
            if (q != null) q = q.next;
        }
        
        if (carry > 0) {
            curr.next = new ListNode(carry);
        }
        
        return headNode.next;
    }
}