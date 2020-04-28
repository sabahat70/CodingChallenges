var subarraySum = function(nums, k) {
    let count = 0;

    for(let i = 1; i <= nums.length;i++){
    	count += slide(nums,i,k);
    }
    return count;
};

var slide = function(nums,wsize,k){

	let sum = 0;
	let count = 0;

	for(let i = 0; i < wsize; i++)
		sum = sum + nums[i];
	
	if (sum === k)count++;

	for(let i = 1; i<= nums.length-wsize;i++){

		sum += nums[i+wsize-1] -nums[i-1];
		if (sum === k) count++;
	}

	return count;
}

console.log(slide([1],1,1));
console.log(subarraySum([1,1,1],2));
console.log(subarraySum([1],1));