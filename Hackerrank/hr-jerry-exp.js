var expression ="-+??+??";
var expArr = expression.split("");
var newExp = [];

var stack = [];

var expLength = expression.length;

expArr.forEach((ch,i) => {

	if (ch === '?')
		stack.push(ch);
	else 
		if(stack.length !==0 ){
			
			
			newExp.push(stack.pop());
			newExp.push(ch);

		}else{
			newExp.push(ch);
			
		}

	
	

});

console.log(newExp);