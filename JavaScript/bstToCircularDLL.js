var treeToDoublyList = function(root) {
    if (root == null) return root;
    
    let head = null, prev = null;
    let dfs = function(root) {
        if (!root) return;

        dfs(root.left);
        
        if (head == null) head = root; // initialize head
        if (prev == null) prev = root; // initilize prev
        else {
            prev.right = root;
            root.left = prev;
        }
                
        prev = root;
        dfs(root.right);
    }
    
    dfs(root);
    prev.right = head;
    head.left = prev;
    return head;
};