 function TreeNode(val) 
 {
     this.val = val;
     this.left = this.right = null;
 }
 

var bstFromPreorder = function(preorder) {
    
    var root = new TreeNode(preorder[0]);
    let iterator = 1;
   

    while(iterator < preorder.length){

    	let node = new TreeNode(preorder[iterator]);
    	insert(root, node);
    	console.log(root);
    	iterator++;
    }

 	return root;

};

var insert = function(root,node){

	if(node.val >= root.val){
		if(root.right === null) root.right = node;
		else insert(root.right,node)
		
	}
	else if (node.val < root.val){
		if (root.left === null) root.left = node;
		 else insert(root.left,node);
		
	}

}

console.log(bstFromPreorder([8,5,1,7,10,12]));
