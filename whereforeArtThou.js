function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  
  var sourceKeys = Object.keys(source);
  
  for (var i = 0; i < collection.length; i++) {
    
    if(collection[i].hasOwnProperty(sourceKeys)) {
      arr.push(collection[i]);
    }
    
  }

  function isTheSame(item) {
    
    for (var j = 0; j < sourceKeys.length; j++) {
      
      if(sourceKeys.length === 1) {
        
        return item[sourceKeys] === source[sourceKeys];
      }
       
        if(item.hasOwnProperty(sourceKeys[j+1]) && item.hasOwnProperty(sourceKeys[j])) {
        
          return true; 
        }  
      
    }
  }
  
  arr = collection.filter(isTheSame);
  
  console.log('source: ',source);
  console.log('source keys: ',sourceKeys); 
  console.log('collection: ',collection);

  // Only change code above this line
  return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
