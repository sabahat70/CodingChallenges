var p_pow = [];
var string = "abd";
var m = string.length;
const p = 31;
var Same = {};
var MP = {};
var H = [];
var S = string.split();
function initP  () {
	p_pow[0] = 1;
	for (var i = 1; i <= m ; i++)
		p_pow[i] = p_pow[i - 1] * p;


}

function process(){
	for (var i = 0; i < m ; i++){
		
		H[i]=(string.charCodeAt(i) - "a".charCodeAt(0) + 1) * p_pow[i];
		if(i > 0) H[i] += H[i - 1];
	}
	
	if (H[m-1] in Same)
		Same[H[m-1]]++;
	else{

		Same[H[m-1]] = 0;
		Same[H[m-1]]++;
	}
	


	for (var i = 0; i < m ; i++){
		var h  = 0;
		if (i === 0){
			h = H[m-1] - H[i];
			h += 27;
		}else if (i === m - 1){
			h = H[i-1];
			h += 27 * p_pow[i];
		}else{
			h = H[i-1];
			h += H[m-1] - H[i];
			h += 27 * p_pow[i];
		}

		if (h in MP)
		MP[h]++;
		else
		{
			MP[h] = 0;
			MP[h]++;
		}
		console.log("h:" + h);
	}
	
	
	
}

initP();
process();
console.log("S:" + S);
console.log("H:" + H);


