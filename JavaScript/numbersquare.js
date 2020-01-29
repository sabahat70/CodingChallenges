function numbersquare(n,s){
	
	let arr = [...Array(n)].map( el => el = []);

	for(let i = 0; i < n; i++){

		for(let j =0; j < i + 1; j++){
			console.log(j,i);
			arr[j][i] = s;
			s++;
		}
		for(let j = i-1; j>=0; j--){
			console.log(i,j);
			arr[i][j] = s;
			s++;
		}
	}
	return arr;
}

function printSquare(arr){

	for(let i = 0; i < arr.length; i++){
		for(let j=0; j< arr.length; j++)
			console.log(arr[i][j]);

		console.log("\n");
	}
}


printSquare(numbersquare(5,1));