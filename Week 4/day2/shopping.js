"use strict";
(function () {

    function Product(name, price, expDate) {

        this.id = parseInt(((99999 - 10000) * Math.random()) + 10000),
            this.name = name,
            this.price = parseFloat(price),
            this.expirationDate = new Date(expDate)


        this.getInfo = function () {
            var firstletter = this.name[0].toUpperCase();
            var lastLetter = this.name.charAt(this.name.length - 1).toUpperCase();

            return firstletter.concat(lastLetter, this.id, ', ', this.name, ', ', this.price);

        }


    }

    function ShoppingBag() {

        this.listOfProduct = [];

        this.addProduct = function (proizvod) {

            if (proizvod instanceof Product) {   // ne upisuje objekte koji nisu napravljeni preko Product konstruktora(koji nisu tipa Product)
                if (proizvod.expirationDate > new Date()) {

                    this.listOfProduct.push(proizvod);
                }

            }
            return this.listOfProduct;
        }

        this.calculateTotalPrice = function () {
            var sumTotalPrice = 0;
            for (var i = 0; i < this.listOfProduct.length; i++) {

                sumTotalPrice += this.listOfProduct[i].price;
            }

            return sumTotalPrice;

        }

        this.avgPrice = function () {
            var average = 0;
            average = this.calculateTotalPrice() / this.listOfProduct.length;
            return average;
        }

        this.mostExpensive = function () {

            this.listOfProduct.sort(
                function (p1, p2) {
                    return p1.price - p2.price;
                }
            )
            var max = this.listOfProduct[this.listOfProduct.length - 1];
            return max.getInfo()

        }

    }

    function PayCard(accbalance, status, validUntil) {

        this.accountBalance = parseFloat(accbalance),
            this.status = status === 'valid',
            this.validUntilDate = new Date(validUntil)
    }


    function checkoutAndBuy(ShoppingBag, paymentCard) {

        if (paymentCard.accountBalance >= ShoppingBag.calculateTotalPrice() && paymentCard.status === true && paymentCard.validUntilDate >= new Date()) {
            return 'Payment is successful!'
        } else if (paymentCard.status !== true) {
            return 'Card is not valid!'
        } else if (paymentCard.validUntilDate < new Date()) {

            return 'Card is expired!'
        } else {

            var miss = ShoppingBag.calculateTotalPrice() - paymentCard.accountBalance;
            return miss + ' is missing!'
        }


    }




    var banana = new Product('Banana', '123.9874', '12/12/2022');
    var kiwi = new Product('kiwi', '199.9874', '12/12/2018');
    var apple = new Product('apple', '770.65', '12/12/2022');
    var lemon = new Product('lemon', '350', '12/12/2022');
    var nikolaBag = new ShoppingBag();
    nikolaBag.addProduct(banana);
    nikolaBag.addProduct(kiwi);
    nikolaBag.addProduct(apple);
    nikolaBag.addProduct(lemon);

    var bundeva = {
        id: 95863,
        name: 'bundeva',
        price: '156.32',
        expirationDate: '12/5/2019'
    }
    nikolaBag.addProduct(bundeva);
    var nikkartica = new PayCard('159489', 'valid', '6/5/2019');



    console.log(checkoutAndBuy(nikolaBag, nikkartica));

    // console.log(banana);
    // console.log(banana.expirationDate);

})();


