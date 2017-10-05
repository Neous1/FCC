var memory = [],
    num1 = 0,
    num2 = 0,
    operator, result = 0;

var smallDisplay = document.getElementById("smallDisplay")
var bigDisplay = document.getElementById("bigDisplay")


//display buttons
var buttons = document.getElementsByClassName("btn");
// console.log(buttons.length);
for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].value !== "AC" && buttons[i].value !== "<--") {
        buttons[i].addEventListener("click", function () {
            if(this.value=="+" && memory !==[] && memory.slice(-1)[0]=="+"){
                // console.log("it's a legit +");
                smallDisplay.value += this.value;
                memory.push(this.value);
            }else{
                // smallDisplay.value -= this.value;
                // memory.push(this.value);
                memory.pop();
            }
            // smallDisplay.value += this.value;
            // memory.push(this.value);

            // memory+=this.value
            console.log("Memory", memory);
            console.log("14 .", document.getElementById("smallDisplay").value);
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
            bigDisplay.value = "";
            num1 = 0;
            num2 = 0;
            result = 0;
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
            smallDisplay.value = memory.join("");
        });
    }

    //ADDITION ++++++++++++++++++++++++++++++
    //  if (operators[j].value == "+") {
    //     operators[j].addEventListener("click", function(){
    //         //if last memory entry !== "+ " then push + to memory and display
    //     if(memory!== []){
    //         memory.push=this.value;
    //     }else{
    //         memory.pop();
    //     }
    //         if(memory !==[] && memory.slice(-1)[0]=="+"){
    //             // console.log("plus",memory.slice(-1)[0])
    //             memory = memory.pop()
    //             smallDisplay.value = memory.join("")
    //             num1=parseFloat(memory.join(""));
    //             result = num1 + 0; 
    //             bigDisplay.value = result;

    //         }
    //     });
    // };
}

// function allClear() {
//     // console.log("33 . ", document.getElementById("smallDisplay").value)
//     memory = [];
//     document.getElementById("smallDisplay").value = "";

// }


// function addition() {
//     // if (num2==0){
//     //     num1=parseFloat(memory.join(""))
//     // }
// memory=memory.toString;
//     result=eval(memory)

// }