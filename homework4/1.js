
const number = {
    units: 0,
    dozens: 0,
    hundreds: 0,
};

function transform(){
    let a = parseInt(prompt('Введите число от 0 до 999'));
    console.log('Введенное число - ' + a);

    if(a <= 9){
        number.units = a;
    }
    else if(a <= 999){
        number.units = Math.floor(a % 10);
        number.dozens = Math.floor(a / 10 % 10);
        number.hundreds = Math.floor(a / 100 % 10);
    }
    else{
        console.log('Введенное число не соответствует требованию');
    }

    console.log('Сотни - ' + number.hundreds);
    console.log('Десятки - ' + number.dozens);
    console.log('Единицы - ' + number.units);
}

transform();