var isValidSequence = function(root, arr) {
    let isValid = false;
    let index = 0;

    isValid = dps_1(root,arr,index);

    return isValid;
};

var dps_1 = function(root,arr,index){

	if (root === null || index === arr.length )return false;
	if ( root.left === null && root.right === null){
		if (root.val === arr[index] && index === arr.length - 1)
			return true;
		return false;
	}
	return ((index < arr.length ) && (root.val ===arr[index] &&
		dps_1(root.left,arr,index + 1) || dps(root.right,arr,index + 1);
	

}

var dps_2 = function(root,arr,index){

	if (root.val !== arr[index]) return false;
	if (index === arr.length - 1 )
		return !root.left && !root.right;

	return ((root.left && dps(root.left,arr,index+1)) || (root.right && dps(root.right,arr,index+1)));

	

}

function TreeNode(val, left, right) 
{
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
}