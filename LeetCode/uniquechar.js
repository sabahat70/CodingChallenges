var firstUniqChar = function(s) {
    
    let hashmap = {};
    let min = s.length;
    
    for (let i = 0; i < s.length; i++){
        
        let ch = s[i];
        
        if(hashmap[ch])
        {
            hashmap[ch] = -1;      
        }
        else
        {
           
            hashmap[ch] = i+1;
            
        }
    }
    console.log(hashmap);
    console.log(min-1)
};

firstUniqChar("loveleetcodel".toLowerCase());