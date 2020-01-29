function compress(string){

	var compressedString = string[0];
	var count = 1;

	for (let i = 1; i < string.length; i++){

		if (string[i] === string[i - 1])
			count++;
		else{
			compressedString = compressedString + count + string[i];
			count = 1;

		}
	}
	compressedString = compressedString + count;

	return compressedString.length < string.length ? compressedString:string;
}


console.log(compress("abbbbbbbbbbda"));