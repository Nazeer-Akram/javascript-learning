// Summary;
// Case 1: Cannot access local scope variable at global scope
// Case 2: A global variable can be access at any local scope
// case 3: Nesting Scope
// case 4: This keyword with function inside object
// Case 5 : consoling this key word globaly and through function

//----------------------------------------------------------Case 1: Cannot access local scope variable at global scope

let myFunction = function (value_1, value_2) {
  let myVariable = 25;

  return `Hi my name is ${value_1} and my father name is ${value_2} our Vehicle State Code is ${myVariable} `;
};

//console.log(myFunction("Nazeer", "Kamar Ali"));

//console.log(myVariable);

//-----------------------------------------------------------Case 2: A global variable can be access at any local scope

const Mycity = "Bareilly Uttar Pradesh";

let myFun_2 = function () {
  let variable_1 = "Nazeer";
  return `Hi Iam ${variable_1} my City and State name is ${Mycity}`;
};
//console.log(myFun_2());

//----------------------------------------------------------case 3: Nesting Scope
let myFun_3 = function () {
  let myVaiable = "nazeer akram ";

  let myFun = function () {
    let chilVariable = "& Nazeer akram's Child";
    console.log(myVaiable + chilVariable);
  };

  //return myFun();
};

//myFun_3();

//----------------------------------------------------------case 4: This keyword with function inside object

let myFunForthis = function () {
  let myobj = {
    nameValue: "nazeer",
    contactVale: 9971651687,
    state: "Uttar Pradesh",
    myFun: function () {
      return `Hi I am ${this.nameValue} my contact no is ${this.contactVale} and i belongs to ${this.state}`;
    },
  };

  return myobj.myFun();
};

//console.log(myFunForthis());
//-------------------------------------------------------------Case 5 : consoling this key word globaly and through function
console.log(this);

let myfunction = function () {
  console.log(this);
};
