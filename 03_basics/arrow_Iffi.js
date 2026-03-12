// /console.log("Nazeer");

// /Summary;
//case 1: Arrow Function Syntax 1 = ()=>{}
//case 2: Arrow Function Syntax 2 if need to define with single line : ()=>
//case 3: Immediately Invoked Function with normal function and arraow Function
//Case 4: iffi + arraow + argument

//-------------------------------------------------------case 1: Arrow Function Syntax 1 = ()=>{}

let myarrowFun = (num_1, num_2) => {
  num_1 + num_2;
  return;
};

//console.log(myarrowFun(5, 5));

//-------------------------------------------------------case 2: Arrow Function Syntax 2 if need to define with single line : ()=>

let myarrowFun_2 = (num_1, num_2) => num_1 + num_2;

//console.log(myarrowFun_2(5, 5));

//-------------------------------------------------------case 3: Immediately Invoked Function with normal function and arraow Function

(function myIffiFUN() {
  console.log("name");
})();

(() => {
  console.log(1 + 2);
  return;
})();

(() => console.log(5 + 8))();

//--------------------------------------------------------Case 4: iffi + arraow + argument
((num_1, num_2) => console.log(num_1 + num_2))(5, 2);
