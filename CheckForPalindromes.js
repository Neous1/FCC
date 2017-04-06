 
function palindrome(str) {
// remove the non-alphanumeric characters and apply toLowerCase
  var nstr = str.replace(/[^a-z0-9+]+/gi,"").toLowerCase();
  //Split. reverse and join to be able to compare 
    var x = nstr.split("").reverse().join("");
      console.log (nstr);
       console.log(x);
        if (nstr === x){
          
          return true;
        }
        else{
          
          return false;
        }

}



palindrome("race car");
