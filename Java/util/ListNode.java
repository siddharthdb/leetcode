package util;


public class ListNode {
    int val;
    ListNode next;

    ListNode() {
    }

    ListNode(int val) {
        this.val = val;
    }

    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }

    public static ListNode insert(ListNode list, int data) {

        ListNode newNode = new ListNode(data);
        newNode.next = null;

        if (list.head == null) {
            list.head = newNode;
        } else {
            ListNode lastNode = list.head;
            while (lastNode.next != null) {
                lastNode = lastNode.next;
            }

            lastNode.next = newNode;
        }

        return list;
    }

    public static void printList(ListNode list) 
    { 
        ListNode currNode = list.head; 
   
        System.out.print("LinkedList: "); 
   
        while (currNode != null) {             
            System.out.print(currNode.data + " ");
            currNode = currNode.next; 
        } 
    } 
}