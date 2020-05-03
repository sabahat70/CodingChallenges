var FirstUnique = function(nums) {
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.previous = this.head;
    this.tail.value = -1;
 	this.hashmap = {};

    for (let i = 0; i < nums.length;i++){
    	this.add(nums[i]);
    }
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
    
    return this.head.next.value;
};

/** 
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {
	
    if(this.hashmap[value])
	{
		let node = this.hashmap[value];
		let nodeprev = node.previous;
		let nodenext = node.next;
		if(nodeprev!== null && nodenext!==null){
			nodeprev.next = nodenext;
			nodenext.previous = nodeprev;
			node.previous = null;
			node.next = null;
		}
		
	}
	else
	{

		let node = new Node();
		node.value = value;
		let previous = this.tail.previous;
		previous.next = node;
		node.previous = previous;
		node.next = this.tail;
		this.tail.previous = node;
		this.hashmap[value] = node;
		

	}
    
};

var Node = function(){

	this.value;
	this.previous = null;
	this.next = null;

}

unique = new FirstUnique([2,3,5]);

unique.add(5)

unique.add(2)
//console.log(unique.tail);
unique.add(3)
//console.log(unique.head);
console.log(unique.showFirstUnique())
//console.log(unique.hashmap);