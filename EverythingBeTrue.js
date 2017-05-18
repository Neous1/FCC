
function truthCheck(collection, pre) {
  
  var truthy = true;
  var notTrue = [false, 0, "", null, undefined, NaN];

   //Iterate over collection
   collection.map(function(obj){
   
   //If prop exists 
   if(obj[pre] !== undefined){
     
   console.log(pre+': ' + obj[pre]);

   //If typeof prop = number and is NaN
   if(typeof obj[pre] == 'number' && isNaN(obj[pre])) {
     //Set to false
     truthy = false;
   }
    //Iterate of notTrue array
    for (var i = 0; i < notTrue.length; i++){
      //If obj prop matches item in notTrue array
      if(obj[pre] === notTrue[i]){
        //Set to false
        truthy = false;
      } 
    }
     //Else if prop doesn't exist
   } else {
      console.log('doesnt exist');
      //Set to false
      truthy = false;
   }      
      
  });
  //Return true or false
  return truthy;
} 



truthCheck([{"single": "double"}, {"single": 'yes'}], "single");
