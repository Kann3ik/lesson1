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
    render(i, catalog) {
        return `<div class="catalog">
                    <div><img src="images/min/${i+1}.jpg"></div>
                    <div><b>Наименование</b>: ${catalog.product_name}</div>
                    <div><b>Цена за шт.</b>: ${catalog.price}</div>
                    <div><b>Количество</b>: ${catalog.quantity}</div>
                    <div><b>Стоимость</b>: ${catalog.quantity * catalog.price}</div>
                    <button class="catalog-btn" data-id="${i}">Купить</button>
                </div>`;
    }
}

const cart = {
    cartListBlock: null,
    cartButton: null,
    catalogListBlock: null,
    catalogButton: null,
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
        this.cartButton = document.querySelector('.cart-btn');
        
        this.cartButton.addEventListener('click', this.clearCart.bind(this));

        this.renderCatalog();
        this.catalogButton = document.querySelectorAll('.catalog-btn');
        this.catalogButton.forEach(but => {
            but.addEventListener('click', this.addCart);
        });
        
        this.render();
    },
    renderCatalog() {
        var self = this;
        this.catalogs.forEach(function(i, catalog) {
            self.catalogListBlock.innerHTML += self.catalogItem.render(catalog, i);
        });
    },
    render() {
        var self = this;
        this.cartListBlock.innerHTML = null;
        if (this.goods.length) {
            this.goods.forEach(good => {
                self.cartListBlock.innerHTML += self.cartItem.render(good);
            });
            this.cartListBlock.innerHTML += `В корзине ${this.goods.length} товаров(а) стоимостью ${this.getCartPrice()}`;
        } else {
            this.cartListBlock.textContent = 'Корзина пуста';
        }
    },
    getCartPrice() {
        return this.goods.reduce(function (price, good) {
            return price + good.price * good.quantity;
        }, 0);
    },
    clearCart() {
        this.goods = [];
        this.render();
    },
    addCart() {
        cart.goods.push(cart.catalogs[this.dataset.id]);
        // Array.prototype.push.apply(this.goods, this.catalogs[0]); //работает, но добавляет весь список catalogs в goods
        // Array.prototype.push.apply(this.goods, this.catalogs[0]);

        cart.render();
    },
};

cart.init();