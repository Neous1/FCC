
function fearNotLetter(str) {
  var re =/[a-z]/
 
  // console.log(str);
  var temp = 0;
  temp = str.charCodeAt(index)

  for (var i = 0; i < str.length; i++){
    var index = str.indexOf(str[i]);
    // console.log(str[i],str.charCodeAt(index));

     var currentDC= str.charCodeAt(index); 
     var previousDC = 0;
     
     if (previousDC ===0){
         console.log("init", currentDC);
      
     }     
     else if (currentDC === (previousDC+1)){
         console.log("we're good with", currentDC);
     }
     else{
         console.log("we're missing", currentDC -1);
     }
    var temp = previousDC;
    previousDC = currentDC;
    currentDC 

  }
  // console.log(str.charCodeAt(index)-1);
  // return (String.fromCharCode(str.charCodeAt(index)-1)) ;

}

fearNotLetter("ac");
