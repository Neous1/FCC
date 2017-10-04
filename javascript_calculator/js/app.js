var memory,num1, num2, operator,result;

var smallDisplay= document.getElementById("smallDisplay")
var bigDisplay = document.getElementById("bigDisplay")


//display buttons
var buttons = document.getElementsByClassName("btn");
// console.log(buttons.length);
for (var i = 0; i< buttons.length; i++ ){    
    if(buttons[i].value!=="AC" && buttons[i].value !=="<--" ){
        buttons[i].addEventListener("click", function(){             smallDisplay.value += this.value;
            console.log("14 .",document.getElementById("smallDisplay").value );
        });        
    }
    
}

var operators = document.getElementsByClassName("operator");
// console.log(operators.length)
for (var j = 0; j<operators.length; j++){
    var val = operators[j].value;

    if(operators[j].value =="AC"){
        operators[j].addEventListener("click", function(){
            smallDisplay.value="";
        });
    };

}

function allClear(){
    // console.log("33 . ", document.getElementById("smallDisplay").value)
   return document.getElementById("smallDisplay").value = "";
}


function addition(){

}