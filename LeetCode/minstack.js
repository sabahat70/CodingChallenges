var Node = function(x){
	this.previousMin = null;
	this.next = null;
	this.value = x;
}
var MinStack = function() {
    this.head = null;
    this.currentMin =null; 
  
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    let node = new Node(x);
    let tempHead = this.head;
    

    if (this.head === null){
    	this.head = node;
    	this.currentMin = node.value;
    }
    else{
    	this.head = node;
    	this.head.next = tempHead;
    	
    	if (this.currentMin > node.value){
    		node.previousMin = this.currentMin;
    		this.currentMin = node.value;
    	}
    	else{
    		node.previousMin = this.currentMin;
    	}
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.head!==null){
    	this.currentMin = this.head.previousMin;
    	this.head = this.head.next;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.head.value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.currentMin;
};

// Your MinStack object will be instantiated and called as such:
var minStack = new MinStack();
minStack.push(2);
minStack.push(0);
minStack.push(3);
minStack.push(0);
console.log(minStack);
var min0 =minStack.getMin();   
minStack.pop();
console.log(minStack)
var min1 = minStack.getMin();
minStack.pop(); 
console.log(minStack)     
var min2 = minStack.getMin()
minStack.pop();
var min3 = minStack.getMin()
console.log(min0,min1,min2,min3);
/*var obj = new MinStack()
  obj.push(2)
  obj.push(1)
  obj.push(3)
  obj.push(0);
  console.log(obj)
  obj.pop();
  console.log(obj);
  //obj.pop()
  //var param_3 = obj.top()
  //var param_4 = obj.getMin()
 */