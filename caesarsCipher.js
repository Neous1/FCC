function rot13(str) { // LBH QVQ VG!
  var result = [];
  var test;
  var arr = [];
  for (var i = 0; i < str.length; i++){
    result.push(str[i]);
    for(var j = 0; j < str[i].length; j++){
      if(str[i][j] !== " " && str[i][j] !== "!" && str[i][j] !== "?" && str[i][j] !== "."){
       test = str[i][j].charCodeAt([j]);
       test -= 65; 
       test = (test + 13)%26;
       test += 65;
      arr.push(test);
      }
       else{
         test = str[i][j].charCodeAt([j]);
         arr.push(test);
       }

    }
//       console.log(arr);
  }
  console.log(String.fromCharCode.apply(null,arr));
  return String.fromCharCode.apply(null,arr);
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");