function plus(a, b){
    return a + b;
}

function minus(a, b){
    return a - b;
}

function split(a, b){
    return a / b;
}

function multiply(a, b){
    return a * b;
}

function mathOperation(a, b, operation){
    return operation(a, b);
}

let operation = multiply;

switch(operation){
    case plus:
        console.log(mathOperation(5, 3, plus)); break;
    case minus:
        console.log(mathOperation(5, 3, minus)); break;
    case split:
        console.log(mathOperation(5, 3, split)); break;
    case multiply:
        console.log(mathOperation(5, 3, multiply)); break;
}