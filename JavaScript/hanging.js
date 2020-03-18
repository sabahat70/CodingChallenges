function getMaxLadderSize(n,h,wallPoints,posterLengths){

	let max = 0;
	for(let i = 0; i < n; i++){
		let result = (wallPoints[i] - Math.floor(0.25 * posterLengths[i]) - h);
		if (result > max){
			max = result;
		}
	}
	return max;
}


console.log(getMaxLadderSize(3,5,[15,11,17],[5,1,2]));
console.log(getMaxLadderSize(2,5,[5,5],[4,4]));