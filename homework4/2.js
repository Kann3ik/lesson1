const basket = {
    products: [
        {
            productName: 'Мышь',
            price: 1000,
            count: 1,
        },
        {
            productName: 'Клавиатура',
            price: 1000,
            count: 1,
        },
        {
            productName: 'Монитор',
            price: 15000,
            count: 1,
        },
    ],
    countBasketPrice() {
        return this.products.reduce((sum, item) => sum += item.price, 0);
    },
};

console.log('Стоимость всех товаров: ' + basket.countBasketPrice() + ' руб.');
