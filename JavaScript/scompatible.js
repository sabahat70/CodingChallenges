var string = ["abc","abd","bbd"]
var m = 3;
var set = {};
var same = {};
var sum = 0;

var len = string.length;

function combination(n, r){

	if (r === 0 || r === n ) return 1;
	if( n < r) return 0;
	return combination(n-1,r-1) + combination(n-1,r);
}

function pair_count(t) {
	
    return Object.values(t).reduce((a, b) => a + (b * (b - 1)) / 2, 0); //a is the accumulator b is the value in the hashSet, and the value 0 is the initial value of the accumulator
}

if (len !== 1){
	string.forEach(word => {
			same[word] = (same[word]+1) || 1 ;
			
			for (var i = 0; i < word.length; i++){

				var key = word.substr(0,i) + '*'+ word.substr(i+1);
					
	
	            set[key] = (set[key]+1) || 1 ; 	
	        }
			
			
		
		
	});

}else 
	return 0;


console.log(pair_count(set));
console.log(pair_count(set) - pair_count(same) * m);
for (key in set)
	sum = sum + combination(set[key],2);
console.log(sum);

var ssum =0;
for (key in same)
	ssum = ssum + combination(same[key],2);
console.log(ssum);

