// let theNumber = Number('56AM');
// console.log(typeof (theNumber));
// if (!Number.isNaN(theNumber)) {
//  console.log(theNumber * theNumber);
// } else {
//  console.log('Hey Give Number');
// }

// let result = 1;
// let counter = 0;
// while (counter < 10){
//  result *= 2;
//  counter++;
// }
// console.log(result);

// let yourName;
// do {
//  yourName = "rr";
// } while(!yourName);
// console.log(yourName);

// let str='';
// for(let i = 0; i<7; i++){
//  for(let j = 0; j<i+1;j++){
//   str = str+'#'
//  }
//  console.log(str);
//  str='';   
// }

// let abc = "abdd";
// console.log(abc.length);

// for(let i =1; i<=100; i++){
//  if(i%5 == 0 && i%3==0){
//   console.log("FizzBuzz");
//  }
//  else if(i%5 == 0){
//   console.log("Buzz");
//  }
//  else if(i%3 == 0){
//   console.log("Fizz");
//  }
//  else {
//   console.log(i);
//  }
// }


// let str='';
// for(let i = 0; i<8; i++){
//  for(let j = 0; j<8;j++){
//   if(i%2 == 0){
//    if(j%2 == 0){
//     str = str+' ';
//    }
//    else{
//     str = str+'#'
//    }
//   }
//   else{
//    if(j%2 == 0){
//     str = str+'#';
//    }
//    else{
//     str = str+' '
//    }
//   }  
//  }
//  console.log(str);
//  str='';   
// }

// const makeNoise = function(){
//  return "Plingg";
// }
// console.log(makeNoise());

// let x =10;
// if(true){
//  let y = 20;
//  var z = 30;
//  console.log(x+y+z);
// }
// console.log((x+z));

// const hummus = function(factor) {
//  const ingredient = function(amount, unit, name) {
//    let ingredientAmount = amount * factor;
//    if (ingredientAmount > 1) {
//      unit += "'s";
//    }
//    console.log(`${ingredientAmount} ${unit} ${name}`);
//  };
//  ingredient(1, "can", "chickpeas");
//  ingredient(0.25, "cup", "tahini");
//  ingredient(0.25, "cup", "lemon juice");
//  ingredient(1, "clove", "garlic");
//  ingredient(2, "tablespoon", "olive oil");
//  ingredient(0.5, "teaspoon", "cumin");
// };

// hummus(10);


// let launchMissiles = function() {
//  missileSystem.launch("now");
// };
// launchMissiles();
// if (true) {
//  launchMissiles = function() {/* do nothing */
//  console.log('safeMode');
//  };
//  launchMissiles();
// }
// launchMissiles();

// console.log("The Future says:", future());

// function future(){
//  return "You will have flying cars";
// }

// const power = (base, exponent) => {
//  let result = 1;
//  for(let i = 0; i<exponent; i++){
//   result*=base;
//  }
//  return result;
// }
// console.log(power(5,2));

// function square(x){
//   return x*x;
// }
// console.log(square(5,'dfsd'));

// function minus(a,b){
//  if(b===undefined){
//   return -a;
//  }
//  return a-b;
// }
// console.log(minus(5));

// function findSolution(target) {
//  function find(current, history) {
//    if (current == target) {
//      return history;
//    } else if (current > target) {
//      return null;
//    } else {
//      return find(current + 5, `(${history} + 5)`) ||
//             find(current * 3, `(${history} * 3)`);
//    }
//  }
//  return find(1, "1");
// }

// console.log(findSolution(27));
// // → (((1 * 3) + 5) * 3)

// function printFarmInventory(cows, chickens) {

//  let cowString = String(cows);
//  while (cowString.length < 3) {
//    cowString = "0" + cowString;
//  }
//  console.log(`${cowString} Cows`);


//  let chickenString = String(chickens);
//  while (chickenString.length < 3) {
//    chickenString = "0" + chickenString;
//  }
//  console.log(`${chickenString} Chickens`);
// }
// printFarmInventory(7, 11);

// function printZeroPaddedWithLabel(number, label) {
//  let numberString = String(number);
//  while (numberString.length < 3) {
//    numberString = "0" + numberString;
//  }
//  console.log(`${numberString} ${label}`);
// }

// function printFarmInventory(cows, chickens, pigs, lions) {
//  printZeroPaddedWithLabel(cows, "Cows");
//  printZeroPaddedWithLabel(chickens, "Chickens");
//  printZeroPaddedWithLabel(pigs, "Pigs");
//  printZeroPaddedWithLabel(lions, "Lions");
// }

// printFarmInventory(7, 11, 3, 110);


// function zeroPad(number, width) {
//  let string = String(number);
//  while (string.length < width) {
//    string = "0" + string;
//  }
//  return string;
// }

// function printFarmInventory(cows, chickens, pigs) {
//  console.log(`${zeroPad(cows, 3)} Cows`);
//  console.log(`${zeroPad(chickens, 3)} Chickens`);
//  console.log(`${zeroPad(pigs, 3)} Pigs`);
// }

// printFarmInventory(7, 16, 3);