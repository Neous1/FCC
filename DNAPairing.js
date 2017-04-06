
function pairElement(str) {
  

  str = str.split("");
  console.log(str);
  console.log(" ")
  // var val = ["A", 
  
  var arr = [];
  
  var arr1 = ["A", "C"];
  var arr2 = ["T", "G"];
  


for (var i= 0; i< str.length; i++){
  for (var j = 0; j < arr1.length; j++){
    // console.log(arr1)
    if(str[i]=== arr1[j]){
      arr.push([str[i], arr2[j]]);
    }
    
  }
  for (var k = 0; k < arr2.length; k++){
    if(str[i]=== arr2[k]){
      arr.push([str[i], arr1[k]]);
    }
  }
}

console.log(arr)
return arr;

}

pairElement("ATCGA");

