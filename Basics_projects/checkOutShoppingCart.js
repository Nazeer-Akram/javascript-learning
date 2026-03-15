const myShoppingCart = {
  myOrderPrices: ["230", "500", "450", "45"],
  currency: "₹",
  taxGST: 18,

  calculateFinalAmount: function () {
    let totalPrice = 0;
    let totalTax;
    let priceIncludedTax;

    let counter = 0;

    while (counter < this.myOrderPrices.length) {
      let converToNumber = Number(this.myOrderPrices[counter]);
      totalPrice += converToNumber;

      counter++;
    }

    totalTax = (totalPrice / 100) * this.taxGST;

    priceIncludedTax = totalPrice + totalTax;

    return console.log(
      `Your Total Items are ${this.myOrderPrices.length} and Your Total Amount Inclusive Taxes is ${this.currency} ${priceIncludedTax.toFixed(2).toLocaleString("IN-en")}`,
    );
  },
};

myShoppingCart.calculateFinalAmount();
