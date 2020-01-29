const getWord = (text, word ) => {
	
	const strArr = text.split(" ");
	const n = strArr.length;
	let wArr = [];
	for(let i = 0; i < n ; i++){

		if ((strArr[i] === word) && (i+1 < n)){
			wArr.push(strArr[i+1]);
		}

	}

	return wArr[Math.floor(Math.random() * wArr.length)];
}

console.log(getWord("It was the best times. It was the worst times the best times", "the"));
