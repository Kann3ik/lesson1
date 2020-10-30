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
    switch(operation){
        case 'plus':
            console.log(plus(a, b)); break;
        case 'minus':
            console.log(minus(a, b)); break;
        case 'split':
            console.log(split(a, b)); break;
        case 'multiply':
            console.log(multiply(a, b)); break;
    }
    
}

mathOperation(5, 2, 'multiply');