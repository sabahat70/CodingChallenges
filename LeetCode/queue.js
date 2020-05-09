var queueNode = function(treeNode)
{
    this.treeNode = treeNode; 
    this.next = null;
}

var Queue = function(root)
{
    this.head = new queueNode(root);
}

Queue.prototype.enqueue = function(treeNode)
{
    let node = new queueNode(treeNode);
    let tempHead = this.head;
    while(tempHead.next)
    {
        tempHead = tempHead.next;
            
    }
    
    tempHead.next = node;

}

Queue.prototype.dequeue = function()
{
    let nextNode = this.head.next;
    let tempHead = this.head;
    this.head = nextNode;
    return tempHead;
}

Queue.prototype.isEmpty = function()
{
    if (this.head === null) return true;
    else return false;
}


let testQueue = new Queue(5);

testQueue.enqueue(4);
testQueue.enqueue(3);

console.log(testQueue.dequeue());

console.log(testQueue)
