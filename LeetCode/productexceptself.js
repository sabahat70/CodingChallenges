var productExceptSelf = function(nums) {
    let lproductArr = [1];
    let rproductArr = [1]
    let finalArr = []

    for(let i = 0; i <nums.length-1; i++){
    	lproductArr[i+1] = nums[i]*lproductArr[i];
    }
    for(let i = nums.length - 1; i>0;i--){
    	rproductArr.unshift(nums[i] * rproductArr[0]);
    }
    
    for(let i = 0; i < nums.length; i++ ){
    	finalArr[i] = lproductArr[i] * rproductArr[i];
    }

    return finalArr;
};

console.log(productExceptSelf([1,2,3,4]))