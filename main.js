const screen = document.querySelector('.inner-text');
let firstSum;
let secondSum;
let runningTotal = 0;
let modifier = "";

document.querySelector('.buttons').addEventListener('click', function(event) {


    if (parseInt(event.target.innerText) <= 9 ) {
        screen.innerText += event.target.innerText;
    }

    if (event.target.innerText === "+") {
        firstSum = parseInt(screen.innerText);
        runningTotal += firstSum;
        screen.innerText  = "";
        modifier = "add";
    } else if (event.target.innerText === "-"){
        firstSum = parseInt(screen.innerText);
        runningTotal -= firstSum;
        screen.innerText  = "";
        modifier = "subtract";
    } else if (event.target.innerText === "x"){
        firstSum = parseInt(screen.innerText);
        runningTotal *= firstSum;
        screen.innerText  = "";
        modifier = "multiply";
    } else if (event.target.innerText === "÷"){
        firstSum = parseInt(screen.innerText);
        runningTotal /= firstSum;
        screen.innerText  = "";
        modifier = "divide";
    }

    if (event.target.innerText === "C"){
        screen.innerText = "0";
        firstSum = 0;
        secondSum = 0;
        runningTotal = 0;
        
    }

    if (event.target.innerText === "="){
        secondSum = parseInt(screen.innerText);
        if (modifier === "add"){
            screen.innerText = parseInt(runningTotal + secondSum);
        } else if (modifier === "subtract"){
            screen.innerText = parseInt(runningTotal - secondSum);
        } else if (modifier === "multiply"){
            screen.innerText = parseInt(runningTotal * secondSum);
        } else if (modifier === "divide"){
            screen.innerText = parseInt(runningTotal / secondSum);
        }
    }
})
