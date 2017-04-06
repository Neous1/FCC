function findLongestWord(str) {
    //split string into array of in order to loop thru it.
      var nstr = str.split(" ");
  var arr=[];
  arr = nstr;//
  var size = 0;

  for ( var i = 0; i < arr.length; i++){
    if (arr[i].length > size){
      size = arr[i].length;
    }
    else{ 
      size = size;
    }
    if (size === arr[i].length){
      console.log(arr[i]);
    }
  }
      console.log(size); 

  return size;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
