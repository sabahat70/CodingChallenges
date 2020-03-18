function missing_numbers(arr,brr){

	let hasharr={};
	let hashbrr={};
	let missing = []

	for(let i = 0; i < arr.length; i++){
		if(hasharr[arr[i]])
			hasharr[arr[i]] += 1;
		else
			hasharr[arr[i]] = 1;

	}

	for(let i = 0; i < brr.length; i++){
		if(hashbrr[brr[i]])
			hashbrr[brr[i]] += 1;
		else
			hashbrr[brr[i]] = 1;

	}

	for(key in hashbrr){
		if(hasharr.hasOwnProperty(key)){
			if (hasharr[key] < hashbrr[key])
				missing.push(key);
		}
		else
			missing.push(key);

	}

	return missing;
}

let answer = missing_numbers(
[203, 204, 205,206, 207, 208, 203, 204, 205, 206],

[203, 207, 205, 204,206, 204, 205, 208, 203, 206, 205, 206, 204])

console.log(answer);