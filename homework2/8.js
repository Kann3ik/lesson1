function power(val, pow){
    if (pow < 0 || !Number.isInteger(pow) || !Number.isInteger(val))  return 'Задайте целое положительное число и целое положительное число для степени';
    if (pow === 0)
        return '1';
    else if(pow === 1)
        return val;

    return power(val, pow - 1) * val;
}

console.log(power(10, 3));