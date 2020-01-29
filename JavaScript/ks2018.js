 console.log("start");

 var n = 15;
 var p = 0;
 var m = 0;

const checkp = () =>{

	for (var i = 0; i < 100000 ; i++){

		var x = n + i;
		
		

		while (x!=0 ){

		
			var r = Math.floor(x % 10);
			
			if(r %2===0){
				x = Math.floor(x/10);
				if(x == 0){
					p = i;
					
				}
			}
			else
				break;
			
		}
	}
}

const checkm = () =>{

	for (var i = 0; i < 100000 ; i++){
		
		var y = n - i;
		while (y!=0){
			var r = Math.floor(y % 10);
			if(r% 2===0){
				
			
				y =  Math.floor(y/10);
				if(y == 0){
					m = i;
					return;
				}
			}
			else
				break;
		}

	}
}
checkp();
checkm();

console.log("p: " +p);
console.log("m: " +m);