function telephoneCheck(str) {
  // Good luck!
  // var re = /^([1]( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{10})$/;
      
  var re = /^([1]( |-)?)?(\([0-9]{3}\)|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[0-9]{5})$/;
  
  // var re = /^([1]( |-)?)?(\(?[0-9]{3}\)?
    var myArray = str.match(re);
    console.log(myArray);
    console.log(str);
    
    
    
    if(!str.match(re)){
      return false;
    }
    else{
      return true;
    }
}

// return str;


telephoneCheck("1 555(555-5555");

