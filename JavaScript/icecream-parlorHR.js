function icecream_parlor(sum,arr){
	let solution = [];

	for(let i = 0; i < arr.length; i++){
		for(let j = i + 1; j< arr.length; j++){
			if ( sum === (arr[i]+arr[j])){
				solution.push(i+1);
				solution.push(j+1);
				break;
			}
		}
	}
	console.log(solution);

}

icecream_parlor(4,[2,2,4,3]);