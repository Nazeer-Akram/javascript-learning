let value_1 = 10;

let value_2 = 5;

let myfunction = function (num_1, num_2) {
  let myRetur = num_1 + num_2;

  return myRetur;
};

let result_1 = myfunction(value_1, value_2);
let result_2 = myfunction(value_1, value_2);

/*Step 1 : Global Environment Creation
                |
                |
                This ----------------------------------------------------------(Creation of this Object or Global Executation Context  or Global Environment)
                |
                |
  Step 2 : Memory Creation for Variables.--------------------------------------(Creation of Functional Executation Context)
          value_1 = Undefined
          value_2 = Undefined
          myfunction = defination

          result_1 = undefined
          result_2 = undefined

  Step 3 : Executation Context.
          value_1 = 10
          value_1 = 5
          myFunction = another new environment is created 
                        memory crteation   
                          myRetun = Undefinedf 
                          num_1 = undefined
                          num_1 = undefined

                        Executation
                        num_1 = 10
                        num_2 = 5
                        Final Calculation
                        myRetun = 15
                        sento to the Global Environment : Note after returning the value to the global envirenment this executation us killed or finished */
