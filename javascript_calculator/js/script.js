var memory = [],
    num1 = 0,
    num2 = 0,
    result = 0;

var smallDisplay = document.getElementById("smallDisplay")
var bigDisplay = document.getElementById("bigDisplay")





var buttons = document.getElementsByClassName("btn");

for (var i = 0; i < buttons.length; i++) {
    // Display -------Display------Display -------Display
    if (buttons[i].value !== "AC" && buttons[i].value !== "<--" && buttons[i].value !== "=") {
        buttons[i].addEventListener("click", function () {
            memory.push(this.value)
            smallDisplay.value += this.value;
            bigDisplay.value += this.value;
            console.log("22. ", memory)
        });
    };
    if (buttons[i].value == "AC") {
        buttons[i].addEventListener("click", function () {
            smallDisplay.value = "";
            bigDisplay.value = "";
            num1 = 0;
            num2 = 0;
            result = 0;
            memory = [];
        });
        if(memory.slice(-1)[0] == "*"){
            memory.pop()
        }
    };
    if (buttons[i].value == "<--") {
        buttons[i].addEventListener("click", function () {
            console.log("mem was ", memory);
            //  memory=memory.slice(1,-1);
            memory.pop()
            console.log("new mem: ", memory)
            smallDisplay.value = memory.join("");
            bigDisplay.value = memory.join("");
        });
    };
    // if (buttons[i].value == "/") {
    //     buttons[i].addEventListener("click", function () {
    //         //num1 = parseFloat(memory.join(""))
    //         //don't display "/" unless there's already a number in display
    //         //don't display "/" if the last entry was a "/"
    //         //a number divided by 0 should return not a number. 
    //         // if (memory.length == 0) {
    //         //     memory = [0];
    //         // }

    //     });
    // };
    if (buttons[i].value == "*") {
        buttons[i].addEventListener("click", function () {
            memory.push(this.value)
            console.log("****", this.value);
            
            if (memory.slice(-1)[0] == "*")
            memory.pop();
            console.log('66 .last entry: ', memory.slice(-1)[0]);
            smallDisplay.value = memory.join("");
            bigDisplay.value = memory.join("");

        });
    };
    // if (buttons[i].value == "7") {
    //     buttons[i].addEventListener("click", function () {

    //     });
    // };
    // if (buttons[i].value == "8") {
    //     buttons[i].addEventListener("click", function () {
    //         console.log(this.value);
    //     });
    // };
    // if (buttons[i].value == "9") {
    //     buttons[i].addEventListener("click", function () {
    //         console.log(this.value);
    //     });
    // };
    // if (buttons[i].value == "-") {
    //     buttons[i].addEventListener("click", function () {
    //         console.log(this.value);
    //     });
    // };
    // if (buttons[i].value == "4") {
    //     buttons[i].addEventListener("click", function () {
    //         console.log(this.value);
    //     });
    // };
    // if (buttons[i].value == "5") {
    //     buttons[i].addEventListener("click", function () {
    //         console.log(this.value);
    //     });
    // };
    // if (buttons[i].value == "6") {
    //     buttons[i].addEventListener("click", function () {
    //         console.log(this.value);
    //     });
    // };
    // if (buttons[i].value == "+") {
    //     buttons[i].addEventListener("click", function () {
    //         console.log(this.value);
    //     });
    // };
    // if (buttons[i].value == "3") {
    //     buttons[i].addEventListener("click", function () {
    //         console.log(this.value);
    //     });
    // };
    // if (buttons[i].value == "2") {
    //     buttons[i].addEventListener("click", function () {
    //         console.log(this.value);
    //     });
    // };
    // if (buttons[i].value == "1") {
    //     buttons[i].addEventListener("click", function () {
    //         console.log(this.value);
    //     });
    // };
    if (buttons[i].value == "=") {
        buttons[i].addEventListener("click", function () {
            if (memory.length == 0) {
                memory = ["0"];
            }
            if (memory.slice(-1)[0] !== "+" && memory.slice(-1)[0] !== "-" && memory.slice(-1)[0] !== "/" && memory.slice(-1)[0] !== "*") {
                result = eval(memory.join(""));
                console.log("124 .result ", result);
                bigDisplay.value = result
                // smallDisplay.value = result
                
            }
            if (memory.slice(-1)[0] == "+" || memory.slice(-1)[0] == "-" || memory.slice(-1)[0] == "/" || memory.slice(-1)[0] == "*") {
                // memory.pop()
                // result = eval(memory.join(""));
                console.log("135. result ", result);
                bigDisplay.value = result
                // smallDisplay.value = result                
            }

            
            // if (memory.slice(-1)[0] == "+" )//|| memory.slice(-1)[0] == "-" || memory.slice(-1)[0] == "/" || memory.slice(-1)[0] == "*") {
            //     {
            //     // memory.pop()
            //     //add 1 to 
            //     memory.push(0);
            //     console.log("141 . ", memory)
            //     result = eval(memory.join(""));
            //     console.log("140 .result ", result);
            //     bigDisplay.value = result;
            //     smallDisplay.value = memory.join("");           
            // }
            

            console.log('146 .last entry: ', memory.slice(-1)[0]);

        });
    };
    // if (buttons[i].value == "0") {
    //     buttons[i].addEventListener("click", function () {
    //         console.log(this.value);
    //     });
    // };
    // if (buttons[i].value == ".") {
    //     buttons[i].addEventListener("click", function () {
    //         console.log(this.value);
    //     });
    // };


}

var operators = document.getElementsByClassName("operator")
for (var j = 0; j<operators.length; j++){
    if (memory.length == 0) {
        memory = ["0"];
    }
    if (memory.slice(-1)[0] !== "+" && memory.slice(-1)[0] !== "-" && memory.slice(-1)[0] !== "/" && memory.slice(-1)[0] !== "*") {
        result = eval(memory.join(""));
        console.log("179 . result ", result);
        bigDisplay.value = result
        // smallDisplay.value = result
    }
    //if last entry is an operator or second to last entry is an +  - / X 
    //remove it before calling eval()
    if (memory.slice(-1)[0] == "+" || memory.slice(-1)[0] == "-" || memory.slice(-1)[0] == "/" || memory.slice(-1)[0] == "*") {
        console.log("183 .",memory.slice(-1)[1])
        memory.pop()
        result = eval(memory.join(""));
        console.log("189 . result ", result);
        bigDisplay.value = result;
        // smallDisplay.value = result
        
    }
}
