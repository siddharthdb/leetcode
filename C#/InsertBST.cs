/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    public TreeNode InsertIntoBST(TreeNode root, int val) {
        var curr = root;
        
        while(curr != null) {
            
            if (curr.val > val) {
                if (curr.left == null) {
                    curr.left = new TreeNode(val);
                    return root;
                } else {
                    curr = curr.left;
                }
            } else {
                if (curr.right == null) {
                    curr.right = new TreeNode(val);
                    return root;
                } else {
                    curr = curr.right;
                }
            }
        
        }
        
        return new TreeNode(val);
    }
}