let basket = [
    ['Яблоки', 30, 23], // название, цена, количество
    ['Бананы', 62, 15],
    ['Апельсины', 17, 10],
    ['Мандарины', 36, 100],
];

function countBasketPrice(basket){
    let sum = 0;
    for(let i = 0; i < basket.length; i++){
        sum += basket[i][1];
    }
    return sum;
}

console.log('Стоимость всех товаров: ' + countBasketPrice(basket) + ' руб.');