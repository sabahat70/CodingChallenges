
  
 function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
 }
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    
};

var depth = function(node)
{
	if (node=== null)
		return 0;
	else
	{
		let lDepth = depth(node.left) ;
		let rDepth = depth(node.right);

		if (lDepth > rDepth)
			return (lDepth + 1)
		else return (rDepth + 1)
	}

}


var node = new TreeNode(1);
/*node.left = new TreeNode(2);
node.right = new TreeNode(3);
node.left.left = new TreeNode(4);
node.left.right = new TreeNode(5);*/

console.log(depth(node.right));


