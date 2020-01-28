function sumFibs(num) {
 let fib = [];
 let count = 0;
 let sum = 0;
 let temp = 0;

 while (temp < num){
 	if (count < 2){
 		fib.push(1);
	    sum = sum + 1;
 	}else{
	 	temp = fib[count - 1] + fib[count - 2]
	 	fib.push(temp);
	 	if(temp % 2 !==0 && temp <= num){
	 		sum = sum + temp;
	 	}
	 	
	 }
	 count++;
 }
 

 return sum;
}

console.log(sumFibs(75025));