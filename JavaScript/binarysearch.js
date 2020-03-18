//Binary Search Algorithm


function binary_search(array,searchValue){

	let low = 0;
	let high = array.length - 1;
	let mid;

	while(low <= high){
		mid = Math.floor((low + high)/2);

		if(array[mid] > searchValue)
			high = mid - 1;
		else if(array[mid] < searchValue)
			low = mid + 1;
		else
			return mid;

		

	}

	return -1;

}

console.log(binary_search([10,14,60,75, 83, 99, 123],14))