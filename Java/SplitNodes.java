import util.ListNode;

public class SplitNodes {
    public ListNode[] splitListToParts(ListNode root, int k) {
        ListNode current = root;
        int N = 0;
        while (current != null) {
            current = current.next;
            N++;
        }

        int width = N / k, rem = N % k;

        ListNode[] nodeList = new ListNode[k];
        current = root;
        
        for (int i = 0; i < k; ++i) {
            ListNode head = new ListNode(0), write = head;

            for (int j = 0; j < width + (i < rem ? 1 : 0); ++j) {
            
                write = write.next = new ListNode(current.val);
                if (current != null)
                    current = current.next;
            }
            
            nodeList[i] = head.next;
        }
        return nodeList;
    }
}
