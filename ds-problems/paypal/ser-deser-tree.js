/*
Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

Input: root = [1,2,3,null,null,4,5]
Output: [1,2,3,null,null,4,5]
Example 2:

Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 104].
-1000 <= Node.val <= 1000
*/

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var serialize = function(root) {
    if (!root) return '[]';

    const queue = [root];
    const result = [];

    while (queue.length > 0) {
        const node = queue.shift();
        if (node) {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push('null');
        }
    }

    // Optional: Remove trailing "null"s for compactness
    while (result[result.length - 1] === 'null') {
        result.pop();
    }

    return JSON.stringify(result);
};

var deserialize = function(data) {
    if (data === '[]') return null;

    const nodes = JSON.parse(data);
    const root = new TreeNode(nodes[0]);
    const queue = [root];
    let i = 1;

    while (queue.length > 0 && i < nodes.length) {
        const current = queue.shift();

        const leftVal = nodes[i++];
        if (leftVal !== 'null' && leftVal !== undefined) {
            current.left = new TreeNode(leftVal);
            queue.push(current.left);
        }

        const rightVal = nodes[i++];
        if (rightVal !== 'null' && rightVal !== undefined) {
            current.right = new TreeNode(rightVal);
            queue.push(current.right);
        }
    }

    return root;
};
let root = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4), new TreeNode(5)));

let data = serialize(root);
console.log(data); // "[1,2,3,null,null,4,5]"

let newRoot = deserialize(data);
console.log(serialize(newRoot)); // should match original: "[1,2,3,null,null,4,5]"
