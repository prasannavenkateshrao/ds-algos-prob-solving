var isValidBST = function(root){
    function validate(node, min, max){
        if(node === null) return true;
        if(node.val <= min  || node.val >=max) return false;
        return validate(node.left, min, node.val) && validate(node.right, node.val, max);
    }
    return validate(root, -Infinity, Infinity);
}
const root = {
    val: 2,
    left: { val: 1, left: null, right: null },
    right: { val: 3, left: null, right: null }
  };
  console.log('Is the tree a valid BST?', isValidBST(root));