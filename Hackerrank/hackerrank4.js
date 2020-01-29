var students = ["abc","abd","bbd"];
var nPairs = 0;

for (var i = 0; i < students.length; i++){
	console.log("i:" + i);
	for (var j = i + 1; j < students.length; j++){
		console.log("j:" +j);
		var s1 = students[i]; console.log(s1);
		var s2 = students[j]; console.log(s2);
		console.log(" ");
				var k = 0;
		var count = 0;
		while (k < s1.length){
			console.log("k:" + k);
			if(s1[k] !== s2[k])
				count++;
			k++;

		}

	}
	if (count === 1)
		nPairs++;
	
}

console.log(nPairs);