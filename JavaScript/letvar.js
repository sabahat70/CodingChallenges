//variables declared using var have a global scope
//variables declared using let have a block scope

//example using a for loop block

for (var i = 0; i < 10; i++)
	console.log(i);

console.log("i:" + i);

//the variable i is accesible even after the for-loop has ended

for(let j = 0; j < 10; j++)
	console.log(j);

console.log("j:" + j);

// the variable j is not recognized after the for-loop block because it's life is just within that block and thus
// no longer exists after the loop ends.
