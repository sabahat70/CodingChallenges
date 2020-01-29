var array = [1,2,1,2];
var tempArr = [];
var totalCount = 0;
const checkPalindrome = (array) => {

	array = array.sort();
	var counts = [];
	var count = 1;
	 var pValue = array[0];
	for (var i = 1; i < array.length+1; i++){

		if (array[i] === pValue){
			count++;
			
		}
		else{
			pValue = array[i];
			counts.push(count);
			count = 1;
		}
	}
	var odd = 0;
	for(var i = 0; i < counts.length; i++){

		
		if (counts[i] & 1 === 1)
			odd++;

		if (odd > 1)
			return false;


	}

	return true;
}

for (var i =0; i<array.length; i++){

	for(var j = i; j< array.length; j++){

		for (var k = i; k < j+1; k++){
			tempArr.push(array[k]);

		}

		if (checkPalindrome(tempArr))
			totalCount++;
		tempArr = [];
	}
	
}



console.log(totalCount);