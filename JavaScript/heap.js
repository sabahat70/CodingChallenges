var Node = function(key,value){
	this.key = key;
	this.value = value;
}

var MaxHeap = function(size){

	this.maxsize = size;
	this.currentsize = 0
	this.heapArray = [];

	
	this.insert = function(node){
		if (this.heapArray.currentsize === 0){
			this.heapArray.push(node);
			this.currentsize++;
		}else{
			this.heapArray.push(node);
			this.trickleUp(this.currentsize++);
		}
	}
	this.remove = function(node){
		if (this.currentsize!==0){
			let tempNode = this.heapArray[0];
			this.currentsize--;
			this.heapArray[0] = this.heapArray[this.currentsize];
			this.trickleDown(0)
			return tempNode;
		}
	}

	this.display = function(){

		for(let i = 0; i < this.currentsize ; i++){
			console.log(i,this.heapArray[i]);
		}
	}

	this.trickleUp = function(index){
		
		let tempNode = this.heapArray[index];
		let parentNodeIndex = parseInt((index-1)/2);

		while(index > 0 && this.heapArray[parentNodeIndex].key < tempNode.key){
			this.heapArray[index] = this.heapArray[parentNodeIndex];
			index = parentNodeIndex;
			parentNodeIndex = Math.floor((index-1)/2)
		}
		this.heapArray[index] = tempNode;
	}

	this.trickleDown = function(index){
		
		let tempNode = this.heapArray[index];
		let largerChildIndex;
		

		while (index < parseInt(this.currentsize/2)) // while node has at least one child
		{
			let rightChildIndex = index*2 + 2;
			let leftChildIndex = index*2 + 1;
			//find larger child 
			if(rightChildIndex <  this.currentsize && 
				this.heapArray[leftChildIndex].key < this.heapArray[rightChildIndex].key)
				largerChildIndex = rightChildIndex;
			else 
				largerChildIndex = leftChildIndex;

			if (tempNode.key > this.heapArray[largerChildIndex].key)
				break;

			this.heapArray[index] = this.heapArray[largerChildIndex];
			index = largerChildIndex;
			
		}
		
		this.heapArray[index] = tempNode;
	}
}

let task1 = new Node(100,4);
let task2 = new Node(90, 3);
let task3 = new Node(120,7);
let task4 = new Node(150,12);

let heap = new MaxHeap(10);

heap.insert(task1);
heap.insert(task2);
heap.insert(task3);
heap.insert(task4);
heap.display();
let max = heap.remove();
heap.display();
console.log(max);

