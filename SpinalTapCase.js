
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
  //find each word
  var re = /[\s_]/g;
  var re2=/([a-z])([A-Z])/g;
  
  
  var found = str.match(re);
  
  
  console.log("found :", found);
  //return str with found 

  
    var newstr = str.replace(re,'-');
  // console.log(newstr.toLowerCase());
   newstr = newstr.replace(re2,'$1-$2');
  console.log(newstr.toLowerCase());
  
  return newstr.toLowerCase();
  
}

spinalCase("this_isSpinalTap,");

