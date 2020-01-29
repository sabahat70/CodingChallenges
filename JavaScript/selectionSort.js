let arr = [5,6,3,7,8,1,0];

const selectionSort = (arr) => {
	const n = arr.length;

	for(let i = 0; i < n ; i++){
		let min = i;
		for(let j = i+1; j < n; j++){

			if(arr[j] < arr[min])
				min = j;
		}

		if(min!=i){
			const temp = arr[i];
			arr[i] = arr[min];
			arr[min] = temp;
		}
	}


}

selectionSort(arr);

console.log(arr);


/*

NOTES

Runtime: 



*/