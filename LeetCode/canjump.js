var canJump = function(nums) {
    
   
   let lastIndex = nums.length - 1;

   for(let i = nums.length-1; i>=0; i--){
   		if( i + nums[i]>= lastIndex)
   			lastIndex = i;
   }
   return lastIndex == 0;

   /* let i = 0;
 

   while (i < nums.length)
    {
    	if(nums[i] === 0) break;

    	i += nums[i];
    	
    	if(i === nums.length -1) return true;
    }

 	if (i === nums.length - 1) return true;
    
    return false;*/


};
// I have the destination number.
//make possible comibinations
//calculate sum for all those combinations

console.log(canJump([2,3,1,1,4]));

/* [
	[1,2],
	[1,2,3],
	[1],
	[1] 
   ]
*/
console.log(canJump([3,2,1,0,4]))