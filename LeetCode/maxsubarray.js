var maxSubArray = function(nums) {

	let max_sum = find_max(nums, nums.length);

	for (let i = nums.length - 1 ; i > 0 ; i--){
		let sum = find_max(nums, i); 
		max_sum =  sum > max_sum ? sum : max_sum; 
	}

    return max_sum;
};

function find_max(nums,k){
	let sum = 0;
	let max;
	for(let i = 0; i < k; i++){
		sum = sum + nums[i];
	}
	max = sum;
	

	for(let i = 1; i <= nums.length - k ; i++){
		
		sum += nums[i+k-1] - nums[i-1];
		max = sum > max ? sum : max;
	}

	return max;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));