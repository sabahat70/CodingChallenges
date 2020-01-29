function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {

    localArray.splice(n, 0, arr1[i]); //kind of adding from the position
    n++;
  }
  return localArray;
}

var result = frankenSplice([1, 2, 3], [4, 5], 1);
console.log(result);