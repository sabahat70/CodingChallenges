var checkValidString = function(s) {

	let low = 0;
	let high = 0;

	for(let i =0; i<s.length;i++){
		if(s[i] === '(')
		{
			low++;
			high++;
		}
		else if(s[i] === ')')
		{
			low--;
			high--;
		}
		else if(s[i] === '*')
		{
			low--;
			high++;
		}
		console.log(s[i],low,high);
		if(high < 0)
			return false;
		low = Math.max(low,0);



	}
	return low === 0;
};
//console.log(checkValidString('(*))')) //true
console.log(checkValidString('(*()))(*')) //true
//console.log(checkValidString('(*)')) //true
//console.log(checkValidString("**(((*"))//false*/
//console.log(checkValidString("(()(()))(()()()))))((((()*()*(())())(()))((*()(*((*(*()))()(())*()()))*)*()))()()(())()(()))())))"))
