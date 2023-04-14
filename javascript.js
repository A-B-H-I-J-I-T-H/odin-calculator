let msg1 = "" , msg2 = "" , op;
let btns = document.querySelectorAll('button');

const dot = document.querySelector('.dot');

const display = document.querySelector('.display');


btns.forEach((button) => {
    let id = button.getAttribute('class');
    button.addEventListener('click', function() {
        getKey(0,id);
    })
})

window.addEventListener('keydown', function (e) {
    getKey(e,null);
})

function getKey(e,id) {
    let clss;
    if (id == null && e != 0)
        clss = e.key;
    else 
        clss = id;
    switch(clss) {
        case "0":
            msg2+="0";
            display.textContent = msg2;
            break;
        case "1":
            msg2+="1";
            display.textContent = msg2;
            break;
        case "2":
            msg2+="2";
            display.textContent = msg2;
            break;
        case "3":
            msg2+="3";
            display.textContent = msg2;
            break;
        case "4":
            msg2+="4";
            display.textContent = msg2;
            break;
        case "5":
            msg2+="5";
            display.textContent = msg2;
            break;
        case "6":
            msg2+="6";
            display.textContent = msg2;
            break;
        case "7":
            msg2+="7";
            display.textContent = msg2;
            break;
        case "8":
            msg2+="8";
            display.textContent = msg2;
            break;
        case "9":
            msg2+="9";
            display.textContent = msg2;
            break;
        case "dot":
        case ".":
            if (dot.disabled == "")
                msg2+=".";
            display.textContent = msg2;
            dot.disabled = "true";
            break;
        case "sum":
        case "+":
            if(msg1 != "") {
                msg2 = operate(msg1,msg2,op);
            }
            msg1 = msg2;
            msg2 = "";
            op = "+";
            dot.disabled = "";
            display.textContent = op;
            break;
        case "sub":
        case "-":
            if(msg1 != "") {
                msg2 = operate(msg1,msg2,op);
            }
            msg1 = msg2;
            msg2 = "";
            op = "-";
            dot.disabled = "";
            display.textContent = op;
            break;
        case "mul":
        case "*":
            if(msg1 != "") {
                msg2 = operate(msg1,msg2,op);
            }
            msg1 = msg2;
            msg2 = "";
            op = "x";
            dot.disabled = "";
            display.textContent = op;
            break;
        case "div":
        case "/":
            if(msg1 != "") {
                msg2 = operate(msg1,msg2,op);
            }
            msg1 = msg2;
            msg2 = "";
            op = "/";
            dot.disabled = "";
            display.textContent = op;
            break;
        case "C":
        case "c":
            msg1 = "";
            msg2 = "";
            op = "";
            dot.disabled = "";
            display.textContent = op;
            break;
        case "equals":
        case "=":
            if (msg1 != "") {
                msg2 = operate(msg1,msg2,op);
            }
            display.textContent = msg2;
            dot.disabled = "";
            break;
        case "Backspace":
            msg2 = msg2.slice(0,msg2.length-1);
            display.textContent = msg2;
            break;
    }
}

function operate (num1,num2,operator) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch(operator) {
        case "+":
            return num1+num2;
        case "-":
            return num1-num2;
        case "x":
            return num1*num2;
        case "/":
            return num1/num2;
        
    }
}