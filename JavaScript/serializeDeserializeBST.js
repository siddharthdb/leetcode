/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let data = [];

    var tSerialize = function(node) {
        if (node === null) {
            data.push("null");
            return;
        }

        data.push(node.val);
        tSerialize(node.left);
        tSerialize(node.right);
    }

    tSerialize(root);

    return data.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    var arrData = data.split(",")

    var tDSerialize = function() {
        if (arrData.length === 0)
            return;

        const val = arrData.shift();
        if (val === "null")
            return null;

        const node = new TreeNode(val);
        node.left = tDSerialize();
        node.right = tDSerialize();

        return node;
    }

    return tDSerialize();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */