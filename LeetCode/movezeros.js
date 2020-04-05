var moveZeroes = function(nums) {
    let i=nums.length-1,j=0,length = nums.length - 1;
   
    while ( i >= 0){
    	
    	if (nums[i] === 0){ 
            //shift
    		for ( j = i; j<length; j++){
            
    			nums[j] = nums[j+1];
                
    		}
    		//set the last element of shrinking array to 0
            nums[length] = 0;
	    	
           length--;
    	}
    	
    	i--;
    	
    	
    }
    return nums;
};

console.log(moveZeroes([0,1,2,4,1,0]))