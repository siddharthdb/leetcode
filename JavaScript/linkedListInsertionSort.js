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

var sorted = null;

var insertionSortList = function(head) {
    let current = head;
        
    while (current != null) {
        
        let next = current.next; 
        
        sortedInsert(current); 
        
        current = next; 
    }     
    return sorted;
};

var sortedInsert = (newnode)  => {         
    if (sorted == null || sorted.val >= newnode.val)  
    { 
        newnode.next = sorted; 
        sorted = newnode; 
    } 
    else 
    { 
        let current = sorted; 
        while (current.next != null && current.next.val < newnode.val)  
        { 
            current = current.next; 
        } 
        newnode.next = current.next; 
        current.next = newnode; 
    } 
} 