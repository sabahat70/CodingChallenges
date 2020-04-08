var maxProfit = function(prices) {

    let length = prices.length - 1;
    let profit = 0;
    let sumprofit = 0;

    for (let i = 0; i < length; i++){
    	
    	if (prices[i] < prices[i + 1]){
    		
    		profit = prices[i+1] - prices[i];
    		
    		sumprofit += profit;
    	}
    	
    	
    }

    return sumprofit;

};

console.log(maxProfit([7,6,4,3,1]))