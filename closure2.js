// A closure gives you access to an outer fuctions variable to inner function.

// A closure is a combination of a function and lexical environment within which that function was declared.

// Example 
let passed = 5;
let addTo = function () {
  let inner = 5;
  return passed + inner;
}
console.log(addTo());


// Example 
const w = 20;
function makeAdder(x) {
  const z = 10;
  return function (y) {
    return x + y;
  }
}
var add5 = makeAdder(5);
var add10 = makeAdder(10);
console.log(add5(2)); // 7
console.log(add10(5)); //15


// Closure is a Function with Preserved Data
// It preserve the variable inside the fuction as a property 

// Example 
function wrapValue(n) {
  let local = n;
  return () => local;
}
let wrap1 = wrapValue(1);
// console.log(wrap1);
console.log(wrap1());

// Example
function multiplier(factor) {
  return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5))

// Example
function OuterFunction() {

  var outerVariable = 1;

  function InnerFunction() {
    console.log(outerVariable);
  }

  InnerFunction();
}
OuterFunction();

// function outer()  
// { 
//     var arr = []; 
//     var i; 
//     for (i = 0; i < 4; i++)  
//     { 
//         // storing anonymus function 
//         arr[i] = function () { return i; } 
//     }   
//     // returning the array. 
//     return arr; 
// } 
// var get_arr = outer(); 

// console.log(get_arr[0]()); // 4
// console.log(get_arr[1]()); // 4
// console.log(get_arr[2]()); // 4
// console.log(get_arr[3]()); // 4


// function outer()  
// { 
//     function create_Closure(val)  
//     { 
//         return function()  
//         { 
//             return val; 
//         } 
//     } 
//     var arr = []; 
//     var i; 
//     for (i = 0; i < 4; i++)  
//     { 
//         arr[i] = create_Closure(i); 
//     } 
//     return arr; 
// } 
// var get_arr = outer();
// console.log(get_arr[0]()); 
// console.log(get_arr[1]()); 
// console.log(get_arr[2]()); 
// console.log(get_arr[3]()); 

