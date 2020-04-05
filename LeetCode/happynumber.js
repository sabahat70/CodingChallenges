var isHappy = function(n) {
    
    let temp = n;
    let digit;

    if (n === 1) return true;
    else if  (n <= 2 )  return false;
    else{
	    	while(true)
	    	{
		    	let sum = 0;

		    	while(temp)
		    	{ 	console.log("here")
		    		digit = temp % 10;
		    		console.log(digit);
		    		temp = Math.floor(temp /10);
		    		sum = sum + Math.pow(digit,2);
		    	}
		    	
		    	if (sum === 1) return true;
		    	
		    	else if ( sum <= 4) return false;

		    	temp = sum;	    	
	    	}
	}
};

console.log(isHappy(3));