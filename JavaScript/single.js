var singleNumber = function(nums) {
	 for(let i = 0; i < nums.length; i++){
        let item = nums[i];
            if (!nums.slice(i+1).includes(item) && !nums.slice(0,i).includes(item))
        	 return item;
    }
};

console.log(singleNumber([2,2,1]));