// Lexical Scoping
function init() {
 var name = 'Mozilla'; // name is a local variable created by init
 function displayName() { // displayName() is the inner function, a closure
   console.log(name); // use variable declared in the parent function
 }
 displayName();
}
init();

// Simplest Closure
let passed = 5;
let addTo = function(){
 let inner = 5;
 return passed+inner;
}
console.log(addTo);

// Closure
function makeFunc() {
 var name = 'Mozilla';
 function displayName() {
   console.log(name);
 }
 return displayName;
}

var myFunc = makeFunc();
myFunc();

