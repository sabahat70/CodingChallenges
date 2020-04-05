var maximum69number = function(num){
	let digit = 0;
	let temp = num;
	let max = num;
	let power = 0;

	while(temp){
		
		digit = temp % 10;

		temp = Math.floor(temp /10);
		
		if (digit === 9)
		{
			let newValue = (temp * 10 + 6) * Math.pow(10,power)+ num % Math.pow(10,power);
			max = max > newValue ? max:newValue;
		}else if (digit === 6)
		{
			let newValue = (temp * 10 + 9) * Math.pow(10,power)+ num % Math.pow(10,power);
			max = max > newValue ? max:newValue;
		}

		power++;
		
		
		
	}
	return max;
}

console.log(maximum69number(9999));