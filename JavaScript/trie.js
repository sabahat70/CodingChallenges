var Node = function(char)
{
    this.char = char;
    this.charhashmap = {};
    this.isComplete = false;
}
var Trie = function() {
    this.hashmap = {};
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    var i;
    
    if(!this.hashmap[word[0]])
        this.hashmap[word[0]] = new Node(word[0]);
    
    i = 1; 
    temp = this.hashmap[word[0]];

    while(i < word.length)
    {
        if(!temp.charhashmap[word[i]])
            temp.charhashmap[word[i]] = new Node(word[i]);
        temp = temp.charhashmap[word[i]];
        i++;
        
    }

    temp.isComplete = true;
    
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    var i = 0;
    if (this.hashmap[word[i]])
    {   
        temp = this.hashmap[word[i]];
        i=1;
        while(i < word.length)
        {
            if(!temp.charhashmap[word[i]])
                return false;
            temp = temp.charhashmap[word[i]];
            i++;
            
        }

        if(temp.isComplete === true) return true;
        else return false;

    }
    else return false;
    
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    var i = 0;
    if (this.hashmap[prefix[i]])
    {   
        temp = this.hashmap[prefix[i]];
        i=1;
        while(i < prefix.length)
        {
            if(!temp.charhashmap[prefix[i]])
                return false;
            temp = temp.charhashmap[prefix[i]];
            i++;
            
        }

        return true;
       

    }
    else return false;
};

var obj = new Trie();
obj.insert('hello');
obj.insert('right');
console.log(obj.search('hellos'));
console.log(obj.startsWith('holl'));
console.log(obj.search('right'));
console.log(obj.startsWith('ri'));


/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */