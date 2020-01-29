const partition = (arr,low,high) => {

	//const index = Math.floor((low + high) / 2);
	const index = low;
	let pivot = arr[index];

	let i = low;
	let j = high;

	while(i < j){
		while(arr[i] < pivot) //means if it is less and not equal to pivot then i++..
			i++;

		while(arr[j]>pivot )//means if it is more and not equal to pivot then j-- ..else no j--
			j--;

		if(i>j) break; else{
			
			const temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
			
		
			
		}
		console.log(arr);
	}


	return i;
}

//quicksort

const sort = (arr,low,high) =>{

	if(low>=high)
		return;

	const index = partition(arr,low,high);

	sort(arr,low,index-1);
	sort(arr,index+1,high);
}

let arr = [5,1,0,8,7,6,3,9,10,11] // was not working if pivot is the first element in this array case but fixed it
//sort(arr,0,arr.length-1);
console.log(arr);

//selection

const nthSmallest= (arr,low,high,k) =>{


	while(high>low){
		const i = partition(arr,low,high);
		if(i < k) low = i + 1;
		else if(i > k) high = i - 1;
		else
			return arr[k];
	}



}

console.log(nthSmallest(arr,0,arr.length-1,3));

