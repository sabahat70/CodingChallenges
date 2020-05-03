
let maxSum;
var maxPathSum = function(root) {
    
	maxSum = Number.MIN_SAFE_INTEGER;
	pathSum(root)
	return maxSum;

};

var pathSum = function(node){
	if(node === null) return 0;
	let left = Math.max(0,pathSum(node.left));
	let right = Math.max(0, pathSum(node.right));
	maxSum = Math.max(maxSum, left+right+node.val);

	return Math.max(left,right) + node.val;
}