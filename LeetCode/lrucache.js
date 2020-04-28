var LRUCache = function(capacity) {
	this.capacity = capacity;
	this.head = new Node();
	this.tail = new Node();
	this.head.next = this.tail;
	this.tail.previous = this.head;
	this.hashmap = {};
    
};

LRUCache.prototype.get = function(key) 
{
	let result = -1;
	console.log(this.hashmap);
	let node = this.hashmap[key];
	if(node!== undefined){
		result = node.val;
		this.remove(node);
		this.add(node);
	}
	return result;
};

LRUCache.prototype.put = function(key, value) {
	let node = this.hashmap[key];
	if(node!== undefined){
		node.val = value;
		this.remove(node);
		this.add(node);
	}
	else {
		if (Object.keys(this.hashmap).length === this.capacity){
			console.log('here',this.tail.previous.key);
			delete this.hashmap[this.tail.previous.key];
			this.remove(this.tail.previous);
		}

		let node_new = new Node();
		node_new.key = key;
		node_new.val = value;
		this.hashmap[key] = node_new;
		this.add(node_new);
	}

};

LRUCache.prototype.add = function(node){
	let head_next = this.head.next;
	this.head.next = node;
	node.previous = this.head;
	node.next = head_next;
	head_next.previous = node;


}

LRUCache.prototype.remove = function(node){
	let next_node = node.next;
	let previous = node.previous;

	previous.next = next_node;
	next_node.previous = previous;
}

var Node = function(){
	this.key;
	this.val;
	this.previous = null;
	this.next = null;
}


var LRU = new LRUCache(2);

LRU.put(1,1);
LRU.put(2,2);

console.log(LRU.get(1));
LRU.put(3,3);
console.log(LRU.get(2));
//LRU.put(4,4);
//console.log(LRU.get(1));
//console.log(LRU.get(3));
//console.log(LRU.get(4));
