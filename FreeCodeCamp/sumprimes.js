function sumPrimes(num){
	let count = 2;
	let mid = 0;
	let divisors = 2;
	let sum = 0;

	while(count <= num){
		mid = parseInt(count / 2);
		

		for(let i = 2; i <= mid; i++ ){

			if (count % i === 0)
				divisors++;
		}

		if (divisors === 2){
			
			sum = sum + count;
		}

		divisors = 2;
		count++;
		
	}

	return sum;
}


console.log(sumPrimes(10));