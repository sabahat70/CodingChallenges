function mutation(arr) {

const word1 = arr[0].toLowerCase().split("");
const word2 = arr[1].toLowerCase().split("");

for(let i = 0; i < word2.length; i++){
  if (!word1.includes(word2[i]))
    return false;
}

return true;
}

mutation(["hello", "hey"]);