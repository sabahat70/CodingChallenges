let arr = [6,8,3,2,1,9,10]

const insertionSort = (arr) => {

	for (let i = 1; i < arr.length; i++){

		let newValue = arr[i];
		let j = i;
		while( j > 0 && arr[j-1] > newValue){

			arr[j] = arr[j-1];
			j--;
		}

		arr[j]= newValue;

	}

}


insertionSort(arr);

console.log(arr);