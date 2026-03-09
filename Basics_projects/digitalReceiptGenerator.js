//Task 1 : Create an object representing a shopping cart item (name, price, quantity, and discount %) & Calculate the total price after discount.

const myCart = {
  name: "Faizan Khan",
  price: 14599,
  quantity: 5,
  discount: 15,
};

let discountAmount = (myCart["price"] / 100) * myCart.discount;

let priceAfterDiscount = myCart["price"] - discountAmount;

let finalDisplayStatement = `Hi Mr/Ms ${myCart.name} Welcome To Our Store Gadgetlane, Your Total Payable Amount After Discount to be paid is ${priceAfterDiscount.toFixed(2)}, You Got Discount of ${discountAmount.toFixed(2)}`;

console.log(finalDisplayStatement);
