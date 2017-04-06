
function convertHTML(str) {
  // &colon;&rpar;
  
  var remove = /[&<>'"]/g;
  var matched= [];


  var html = ['&amp;', '&lt;', '&gt;', '&apos;', '&quot;'];
  var symb = ['&', '<', '>', '\'', '"'];
  
  console.log(str);
  matched = str.match(remove);
  console.log('Matched: ', matched);
  
  if(!remove.test(str)) {
    
    return str;
  }
  


matched.forEach(function(char){  
  
  for(var j = 0; j < symb.length; j++) {
    
    if (char === symb[j]) {
      
      str = str.replace(char, html[j]);
    }
    
  }
});
  
  
  return str;

}

convertHTML("abc&<'");