var memory = [],
    num1=0, num2=0, operator, result=0;

var smallDisplay = document.getElementById("smallDisplay")
var bigDisplay = document.getElementById("bigDisplay")


//display buttons
var buttons = document.getElementsByClassName("btn");
// console.log(buttons.length);
for (var i = 0; i < buttons.length; i++) {
    if(buttons[i].value!=="AC" && buttons[i].value !=="<--" ){
        buttons[i].addEventListener("click", function(){             smallDisplay.value += this.value;
            memory.push(this.value);
            // memory+=this.value
            console.log("Memory", memory);
            console.log("14 .",document.getElementById("smallDisplay").value );
        });        
    } 

}

var operators = document.getElementsByClassName("operator");
// console.log(operators.length)
for (var j = 0; j < operators.length; j++) {
    var val = operators[j].value;
    //AC
    if (operators[j].value == "AC") {
        operators[j].addEventListener("click", function () {
            smallDisplay.value = "";
            memory = [];

        });
    };
    // Backspace
    if (operators[j].value == "<--" && smallDisplay !== "") {
        operators[j].addEventListener("click", function () {
            // smallDisplay.value -= this.value;
            console.log("mem was ", memory);
            //  memory=memory.slice(1,-1);
            memory.pop()
            console.log("new mem: ", memory)
            smallDisplay.value=memory.join("");
        });
    }

    // //ADDITION ++++++++++++++++++++++++++++++
    // else if (operators[j].value == "+") {
    //     operators[j].addEventListener("click", addition());
    // };
}

function allClear() {
    // console.log("33 . ", document.getElementById("smallDisplay").value)
    memory = [];
    document.getElementById("smallDisplay").value = "";

}


// function addition() {
//     // if (num2==0){
//     //     num1=parseFloat(memory.join(""))
//     // }
// memory=memory.toString;
//     result=eval(memory)

// }