var memory=[], num1=0, num2=0, result = 0;

var smallDisplay = document.getElementById("smallDisplay")
var bigDisplay = document.getElementById("bigDisplay")

var buttons = document.getElementsByClassName("btn");

for (var i=0; i<buttons.length;i++){

    if(buttons[i].value !== "AC" && buttons[i].value!=="<--"){
        buttons[i].addEventListener("click", function(){
            memory.push(this.value)
            console.log("13. ", memory)
        });
    };
    if(buttons[i].value == "AC"){
        buttons[i].addEventListener("click", function(){
            smallDisplay.value = "";
            bigDisplay.value = "";
            num1 = 0;
            num2 = 0;
            result = 0;
            memory = [];
        });
    };
    if(buttons[i].value == "<--"){
        buttons[i].addEventListener("click", function(){
            console.log(this.value);
        });
    };
    if(buttons[i].value == "/"){
        buttons[i].addEventListener("click", function(){
            console.log(this.value);
        });
    };
    if(buttons[i].value == "X"){
        buttons[i].addEventListener("click", function(){
            console.log(this.value);
        });
    };
    if(buttons[i].value == "7"){
        buttons[i].addEventListener("click", function(){
            
        });
    };
    if(buttons[i].value == "8"){
        buttons[i].addEventListener("click", function(){
            console.log(this.value);
        });
    };
    if(buttons[i].value == "9"){
        buttons[i].addEventListener("click", function(){
            console.log(this.value);
        });
    };
    if(buttons[i].value == "-"){
        buttons[i].addEventListener("click", function(){
            console.log(this.value);
        });
    };
    if(buttons[i].value == "4"){
        buttons[i].addEventListener("click", function(){
            console.log(this.value);
        });
    };
    if(buttons[i].value == "5"){
        buttons[i].addEventListener("click", function(){
            console.log(this.value);
        });
    };
    if(buttons[i].value == "6"){
        buttons[i].addEventListener("click", function(){
            console.log(this.value);
        });
    };
    if(buttons[i].value == "+"){
        buttons[i].addEventListener("click", function(){
            console.log(this.value);
        });
    };
    if(buttons[i].value == "3"){
        buttons[i].addEventListener("click", function(){
            console.log(this.value);
        });
    };
    if(buttons[i].value == "2"){
        buttons[i].addEventListener("click", function(){
            console.log(this.value);
        });
    };
    if(buttons[i].value == "1"){
        buttons[i].addEventListener("click", function(){
            console.log(this.value);
        });
    };
    if(buttons[i].value == "="){
        buttons[i].addEventListener("click", function(){
            console.log(this.value);
        });
    };
    if(buttons[i].value == "0"){
        buttons[i].addEventListener("click", function(){
            console.log(this.value);
        });
    };
    if(buttons[i].value == "."){
        buttons[i].addEventListener("click", function(){
            console.log(this.value);
        });
    };
}
// function allClear(){
//     var smallDisplay= document.getElementById("smallDisplay").value="";
//     memory=[], num1=0, num2=0, result = 0;
//     console.log(smallDisplay);
// }