const num1 = parseFloat(prompt("Enter First Number: "));
const operator = prompt("Enter Operator to use: (+, -, *, /)");
const num2 = parseFloat(prompt("Enter Second Number: "));

let result = 0;
if(isNaN(num1) || isNaN(num2)) {
    alert("Error! refresh and input try again");
}
else {
    if(operator == '+') {
        result = num1 + num2;
    }
    else if(operator == '-') {
        result = num1 - num2;
    } 
    else if(operator == '*') {
        result = num1 * num2;
    }
    else if(operator == '/') {
        result = num1 / num2;
    }
    alert("Result is " + result)
}