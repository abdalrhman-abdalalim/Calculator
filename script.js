let Res = document.getElementsByClassName("displayRes")[0];
let bot = document.querySelectorAll("button");
Res.textContent="Enter Your operations";
function updateDisplay(value) {
    if(Res.textContent.includes("Enter Your operations")){
        Res.textContent=value;
    }
    else if(Res.textContent==""){
        Res.textContent="Enter Your operations";
    }
    else{
        if(value=="DE"){
            Res.textContent=Res.textContent.toString().slice(0,-1)
            updateDisplay("");
        }
        else if(value=="="){
            Res.textContent=eval(Res.textContent);
        }
        else Res.textContent+=value;
    }
}

function checkOp() {
    for (let i = 0; i < bot.length; i++) {
        bot[i].addEventListener('click', function() {
            let buttonValue = bot[i].innerHTML;

            // Check if the button value is a valid number
            if (!isNaN(buttonValue) && buttonValue >= 0 && buttonValue <= 9 && buttonValue !== "00") {
                // Update the displayRes element based on the button value
                updateDisplay(buttonValue);
            }
            else{
                if(buttonValue=="AC"){
                    Res.textContent="";
                    updateDisplay(buttonValue);
                }
                else updateDisplay(buttonValue);
            }
        });
    }
}

checkOp();
