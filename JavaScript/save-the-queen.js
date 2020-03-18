function save_the_queen(n,k,a){
	let lo = 0.0, hi =Math.pow(10,15),mid;

	for(let i = 0;i < 400; i++){
		console.log(`i:${i}`)
		mid = (lo+hi)/2;
		console.log(`mid:${mid}`)
		let inv = n;
		let req = 0.0;
		for(let j=0;j<k;j++)
			if(a[j] >= mid){
				console.log(`a[j]:${a[j]} >= ${mid}`)
				inv--;
				console.log(`inv:${inv}`)
			}else{
				req += a[j]
				console.log(`req:${req} +=`)
			}
		if (inv <= 0){
			console.log(`if inv:${inv} <= 0`)
			lo = mid;
			console.log(`lo:${lo} = mid`)
			continue;
		}
		req/= inv;
		console.log(`req${req}  was /= ${inv}`)

		if(req < mid) hi = mid; else lo = mid;
		console.log(`req:${req} < mid: ${mid}  hi = mid else lo = mid`)
		console.log(`hi:${hi} lo:${lo}`)
	}

}

save_the_queen(3,4,[10,15,100,100])

/*Within each iteration of the binary search, there are two cases:
Case 1: The invaders can be kept busy for time =t.
Case 2: The invaders can NOT be kept busy for time = t.
Elaborating on Case1:
The solution loops over each soldier and checks if the soldier has enough 
capacity to keep any of the invader busy for time =t. if this is the case, 
then it reduces the invaders count by 1 (inv--).
At the end of the loop, if inv <= 0, means all invaders can be kept busy 
for time =t.
Since question asks us for a max value of such a time = t, we have room 
for more time. This is where the binary search comes in (lo = mid). This
means our next iteration of the Binary Search will check for higher values 
of t.
Elaborating on Case2:
After looping over each solider, there are still some invaders left (to be 
ngaged). Hence, we try and DISTRIBUTE the capacity of the remaining soldiers
between the remaining invaders (required/=inv).
Note: It is imp to remember here that from among the soldiers already engaged
 with the invaders, even if their capacity if much larger than time =t, the 
 extra capacity will NOT be utilized. This is becuase the invaders need to be 
 kept busy SIMULTANEOUSLY,
If this distributed value is also not sufficient, then we cannot keep the 
invaders engaged for time = t.
Hence we must try for lower values of time =t. this is again where the 
Binary Search comes in (hi = mid)
==========
PS: I am aware that the solution is not intuitive, and even I couldn't 
solve it. But I have shared my thought process with you.*/



