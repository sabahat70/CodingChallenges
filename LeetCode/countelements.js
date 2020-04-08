var countElements = function(arr) {
	let length = arr.length;
	let hashset = {};
	let count = 0;

	for(let i = 0; i < length; i++){
		if (!hashset[arr[i]])
			hashset[arr[i]] = 1;
		else
			hashset[arr[i]]++;
	}


	for(let i = 0; i < length; i++){
		if(hashset[arr[i]+1])
			count++;
	}
    
    return count;
};



console.log(countElements([1,1,3,3,5,5,7,7]));
