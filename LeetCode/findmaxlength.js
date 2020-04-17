var findMaxLength = function(nums) {
    
	let count = 0;
	let countMap = {'0':-1};
	let maxLength = 0;
	


	for(let i = 0; i < nums.length;i++){

		if(nums[i]===0)
			count--;
		else count++;
		
		if(!countMap[count]){
			
			if (countMap[count]===undefined)
				countMap[count] = i;
			else 
				maxLength = Math.max(maxLength, i - countMap[count]);
			
		}else maxLength = Math.max(maxLength, i - countMap[count]);
		

	}	


	return maxLength;
		
};

console.log(findMaxLength([0,0,1,0,0,0,1,1]));