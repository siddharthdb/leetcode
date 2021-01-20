/**
 * Solution 1: Using Recursive
 * @param {*} head 
 */
var addOneRec = function(head) {
    if(head.next === null) {
        //add one
        let sum = (head.val + 1);
        head.val = sum%10;
        return Math.floor(sum/10);
    }
    
    let carry = addOneRec(head.next);
    if(carry > 0) {
        let sum = (head.val + carry);
        head.val = sum%10;
        carry = Math.floor(sum/10);
    }
    return carry;
}
var plusOne = function(head) {
    if(head === null) {
        return null;
    } else {
        let carry = addOneRec(head);
        if(carry > 0) {
            let newNode = new ListNode(carry);
            newNode.next = head;
            head = newNode;
        }
        return head;
    }
};

/**
 * Solution 2: Non-recursive
 * @param {*} head 
 */
var plusOne = function(head) {
    let curr = head;
    const num = [];
    
    while(curr != null) {
        num.push(curr.val);
        curr = curr.next;
    }
    
    let carry = 0, i = num.length - 1;
    let res = [];
    
    while(i >= 0) {
        if (i === num.length - 1) {
            if (num[i] === 9) {
                num[i] = 0;
                carry = 1;
            } else {
                num[i] = num[i] + 1;
                break;
            }
        } else if (carry !== 0) {
            if (num[i] === 9) {
                num[i] = 0;
                carry = 1;
            } else {
                num[i] = num[i] + 1;
                carry = 0;
                break;
            }
        }
        
        i--;
    }
    
    if (carry !== 0) {
        res = [...num, carry];
    } else {
        res = [...num].reverse();
    }
    
        
    let result = res.reduce((acc, curr) => {
          if (acc == null) {
            acc = new ListNode(curr);
          } else {
            acc = new ListNode(curr, acc);
          }
          return acc;
        }, null);
    
    return result;
};