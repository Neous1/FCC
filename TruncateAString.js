
function truncateString(str, num) {
  // Clear out that junk in your trunk
  
  // if str.length is > than num return str with ... ending
  // the three dots represents 3 characters.
  // if str.length is <  num return str with ... ending 
  // but the 3 dots do not count in the new length
  

  console.log(str);
  console.log("str length is : ", str.length);
  console.log("num is :", num);

  if (str.length > num && num <= 3){
  nstr = str.slice(0,num);
  nstr = nstr + "...";
  }  
  else if (str.length === num){
    nstr = str.slice(0, num);
  }
  else if (str.length > num){
    nstr = str.slice(0, num - 3);
    nstr = nstr + "...";
  } 
  
  console.log("truncated str is: ", nstr);
  return nstr;
}

console.log("........Start Here.......");

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
