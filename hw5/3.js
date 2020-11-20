const cartItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.product_name}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <div><b>Количество</b>: ${good.quantity}</div>
                    <div><b>Стоимость</b>: ${good.quantity * good.price}</div>
                </div>`;
    }
}

const catalogItem = {
    render(catalog) {
        return `<div class="catalog">
                    <div><b>Наименование</b>: ${catalog.product_name}</div>
                    <div><b>Цена за шт.</b>: ${catalog.price}</div>
                </div>`;
    }
}

const cart = {
    cartListBlock: null,
    catalogListBlock: null,
    cartItem,
    catalogItem,
    goods: [
        {
            id_product: 123,
            product_name: 'Ноутбук',
            price: 45600,
            quantity: 1,
        },
        {
            id_product: 456,
            product_name: 'Мышка',
            price: 1000,
            quantity: 2,
        },
        {
            id_product: 305,
            product_name: 'Клавиатура',
            price: 2000,
            quantity: 1,
        },
    ],
    catalogs: [
        {
            id_product: 234,
            product_name: 'Монитор',
            price: 50000,
            quantity: 1,
        },
        {
            id_product: 345,
            product_name: 'Коврик',
            price: 1000,
            quantity: 2,
        },
        {
            id_product: 567,
            product_name: 'Системный блок',
            price: 65000,
            quantity: 1,
        },
    ],
    init() {
        this.catalogListBlock = document.querySelector('.catalog-list');
        this.cartListBlock = document.querySelector('.cart-list');

        this.renderCatalog();
        this.render();
    },
    renderCatalog() {
        console.log(123123);
            this.catalogs.forEach(catalog => {
                this.catalogListBlock.insertAdjacentHTML('beforeend', this.catalogItem.render(catalog));
            });
    },
    render() {
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.cartListBlock.insertAdjacentHTML('beforeend', this.cartItem.render(good));
            });
            this.cartListBlock.insertAdjacentHTML('beforeend', `В корзине ${this.goods.length} позиций(а) стоимостью ${this.getCartPrice()}`);
        } else {
            this.cartListBlock.textContent = 'Корзина пуста';
        }
    },
    getCartPrice() {
        return this.goods.reduce(function (price, good) {
            return price + good.price * good.quantity;
        }, 0);
    },

};

cart.init();
