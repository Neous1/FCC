
function titleCase(str) {
  var temp = [];
  var sent;
  var sent_arr = str.toLowerCase().split(" ");
//   console.log(word_arr);
  for (var i = 0; i < sent_arr.length; i++){
    // capture each word then split each word 
     var sing_arr = sent_arr[i];
     var word_arr = sing_arr.split("");
    //capitalize each 1st letter
    word_arr[0] = word_arr[0].toUpperCase();
    //join() all word_arr to form a word
    word_arr = word_arr.join("");  
      temp.push(word_arr);  
     newStr = temp.join(" ");
}
//     console.log(newStr);     
  return newStr;
}
// console.log("--------------");

titleCase("I'm a little tea pot");