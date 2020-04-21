var search = function(nums, target) 
{    
    let start=0;
    let end = nums.length - 1;
    let pivot = get_split_index(nums);

    if (target === nums[pivot] ) return pivot;
    else if (target > nums[pivot] && target <= nums[end])
    {
       	start = pivot;

    }else
    {
    	end = pivot - 1;
    }	


   	while (true)
   	{
   		let midpoint = parseInt((start+end)/2);

   		if(nums[midpoint] === target) return midpoint;
   		else if(start > end)
   		{	
   			return - 1;

   		}else
   		{ 
   			if (nums[midpoint] < target)
   		
   				start = midpoint + 1;
   			else
   				end = midpoint - 1;

   		}
   		

   	}
  // 	return end;


};

var get_split_index = function(nums)
{
	let left = 0;
	let right = nums.length - 1;
	
	while(left <= right)
	{
		let midpoint = parseInt((left + right) / 2);

		if (nums[midpoint] > nums[right])
		{
			left = midpoint + 1;
		}
		else if (nums[midpoint] < nums[left])
		{
			right = midpoint; 
		}
		else 
			break;	
	}

	return left;
}

//console.log(get_split_index([4,5,6,7,0,1,2]));
//console.log(get_split_index([6,7,8,1,2,3,4,5]));

//console.log(search([4,5,6,7,0,1,2],0));
console.log(search([4,5,6,7,0,1,2],8));
//console.log(search([6,7,8,1,2,3,4,5],2));