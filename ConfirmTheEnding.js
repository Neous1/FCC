function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  
  // using 
 newStr = str.substring(str.length - target.length);
  console.log("target is: ", target);
  console.log(newStr);
  if (target === newStr){
     return true;
  }
  else{
    return false;
  }
  
//   target = nsrt ? true : false;
  return target;
}
console.log("------START Here-------"); 
confirmEnding("Bastian", "n");