const myObject = {
  name: "nazeer",
  Address: "Bareilly",
  mobile: 971651687,
};

const myObject_2 = {
  name_1: "Israr",
  Address_1: "Delhi",
  mobile_1: 9599387475,
};

let objAssign = Object.assign({}, myObject, myObject_2); // Object.assign() methods use to merge the objects and return a new object if {} is used.

const myObject_3 = {
  name: "nazeer",
  Address: "Bareilly",
  mobile: 971651687,
};

const myObject_4 = {
  name: "Israr",
  Address: "Delhi",
  mobile: 9599387475,
};

let objAssign_2 = { ...myObject_3, ...myObject_4 }; //rest Operator : use to merge two or more objects and return a new object

//console.log(Object.keys(myObject_4)); // Methods is used to return only keys in the form of array.
//console.log(Object.values(myObject_4)); // Methods is used to return only keys in the form of array.
//console.log(Object.entries(myObject_4)); // return each key pair values in the form of an array warped with an array.

//++++++++++ De-sturcturing Object ++++++++++++

const { Address_1 } = myObject_2;

console.log(Address_1);
