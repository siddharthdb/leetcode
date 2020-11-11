var closestValue = function(root, target) {
    if (root === null) {
        return 0;
    }
    
    let closest = root.val;
    
    while(root !== null) {
        if (root.val === target) {
            return root.val
        } else {
            if (Math.abs(target - closest) >= Math.abs(target - root.val)) {
                closest = root.val;
            }

            if (root.val > target)
                root = root.left;
            else
                root = root.right;
        }
    }
    
    return closest;
};