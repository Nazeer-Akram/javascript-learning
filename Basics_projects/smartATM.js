//Smart ATM

let balanceAmount = 1000;

let widthrawAmount = 100;

let remainingBalance;

const widthraw = function (withdrawVar) {
  let numConver = Number(withdrawVar);

  if (numConver <= 0) {
    return `Invalid amount ${numConver} ! Please Enter the valid Amount.`;
  } else if (numConver > balanceAmount) {
    return `You have an insufficient Balance. ${balanceAmount}`;
  } else {
    remainingBalance = balanceAmount - numConver;
    return `Please wait Processing. Thank you for chosing us. Your Remaining Balance is ${remainingBalance} `;
  }
};

console.log(widthraw(widthrawAmount));
