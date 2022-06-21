const number1 = parseFloat(prompt('Enter a number'));
const operator = prompt('enter an operand (+, -, *, /)');
const number2 = parseFloat(prompt('Enter a sceond number'));

let result;

if (operator === "+"){
    result = number1 + number2
}else if (operator === "-"){
    result = number1 - number2
}else if (operator === "*"){
    result = number1 * number2
}else if (operator === "/"){
    result = number1 / number2
}else{
    prompt('input a valid operator')
}

 alert(`the result is : ${number1} ${operator} ${number2} = ${result}`);