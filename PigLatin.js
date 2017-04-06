
function translatePigLatin(str) {
  var re = /[aeiou]/gi;
  var pLat ="";
  st0 = str.charAt(0);
  st2 =str.charAt(0)+str.charAt(1);

  console.log(st0);
  console.log(st2);
  console.log(str);
  console.log(" ");
  
  if (st0.match(re)){
    pLat= str + "way";
    console.log(pLat);
  }
  
  else if (!st0.match(re) && str.charAt(1).match(re)) {
    pLat+=str+st0+"ay";
    pLat=pLat.substr(1);
    console.log(pLat);
  }
  else if (!st2.match(re)) {
    pLat+=str+st2+"ay";
    pLat=pLat.substr(2);
    console.log(pLat);
  }
  
  return pLat;
}

translatePigLatin("church");


