var leftMostColumnWithOne = function(binaryMatrix) {


    
};

var binary_search = function(row)
{
	let start = 0;
	let end = row.length - 1;
	let minIndex = -1;

	while(true)
	{
		let midpoint = parseInt((start+end)/2);

		if(row[midpoint] === 1){ 
			minIndex = midpoint;
			end = midpoint - 1;
		}
		else if (row[midpoint] === 0){
			start = midpoint + 1;
		}

		if (start>end){
			break;
		}
				
	}
	return minIndex;
}

console.log(binary_search([0,0,0,0,1]));