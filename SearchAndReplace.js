
function myReplace(str, before, after) {
  var firstB = before[0];
  var firstA = after[0];
  
  after = after.split('');
  
  if(firstB == firstB.toUpperCase()) {
    
    after[0] = firstA.toUpperCase();
    
    
    console.log('Before: ', before[0]);
    console.log('After: ', firstA);
    
  }
  console.log(after.join(''));

var newstr = str.replace(before, after.join(''));

  return newstr;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
