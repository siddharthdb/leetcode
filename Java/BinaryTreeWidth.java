public class BinaryTreeWidth {
    private int max = 1;

    public int widthOfBinaryTree(TreeNode root) {
        Map<Integer, Integer> map = new HashMap<>();
        traverse(root, 0, 0, map);
        return max;
    }

    private void traverse(TreeNode root, int level, int x, Map<Integer, Integer> map) {
        if (root == null)
            return;

        if (map.containsKey(level))
            max = Math.max(x - map.get(level) + 1, max);
        else
            map.put(level, x);

        traverse(root.left, level + 1, 2 * x, map);
        traverse(root.right, level + 1, 2 * x + 1, map);
    }
}
