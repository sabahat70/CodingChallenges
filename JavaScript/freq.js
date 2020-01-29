function classify(freq_standard,freq_signals){

	let result = [];
	let value = [];
	let ans = 0;
	let min = 0;
	let minArray = [];

	for(let i =0; i<freq_signals.length; i++){

		for(let j =0; j<freq_standard.length;j++){

			ans = Math.abs(freq_signals[i]-freq_standard[j]);
			if(ans === 0){
				value.push(ans);
				break;
			}
			else
				value.push(ans);

			

		}
		
		min = Math.min(...value);
		if(min === 0)
			result.push(value.indexOf(Math.min(...value)) + 1);
		else
		{
			for(let i =0; i<value.length; i++){
			if (value[i] === min)
				minArray.push(freq_standard[i])
			}
		
			if(minArray.length > 1){
				result.push(freq_standard.indexOf(Math.max(...minArray)) + 1);
			}
			else
				result.push(value.indexOf(Math.min(...value)) + 1)
		}
		value = []
		minArray = []
		}

	return result;
}

console.log(classify([2, 3, 1, 4, 8],[1, 5, 6]));