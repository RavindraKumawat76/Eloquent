// function min(arr){
//     let min = [0];
//     for(let i=1;i<arr.length;i++){
//      if(min>arr[i]){
//       min = arr[i];
//      }
//     }
//     return min;
// }
// console.log(min([2,3,1,0,5,-1]));

// Min 
// function min1(a, b){
//  let min = a <= b ? a: b;
 
//  return min;
// }
// console.log(min1(5,-9));

// Eveness
// function eveness(num){
//  if(num>=0){
//   if(num == 0){
//    return "Even";
//   } else if(num == 1){
//    return "odd"
//   }
//   return eveness(num-2);
// }  return "Enter Positive Number";}
// console.log(eveness(-5));

// function isEven(n) {
//  if (n == 0) return true;
//  else if (n == 1) return false;
//  else if (n < 0) return isEven(-n);
//  else return isEven(n - 2);
// }
// console.log(isEven(50));
// // → true
// console.log(isEven(75));
// // → false
// console.log(isEven(-6));


// Bean Counting
// function countBs(str){
//  let count = 0;
//  for(let i= 0; i< str.length; i++){
//   if(str[i]=== 'B' || str[i]==='b'){
//    count++;
//   }
//  }
//  return count;
// }
// console.log(countBs("BBAb"));

// function countChar(str, str1){
//  let count = 0;
//  let strr = str.toUpperCase()
//  for(let i= 0; i< strr.length; i++){
//   if(strr[i]=== str1.toUpperCase()){
//    count++;
//   }
//  }
//  return count;
// }
// console.log(countChar("BBAb", "B"));


// function countChar(string, ch) {
//  let counted = 0;
//  for (let i = 0; i < string.length; i++) {
//    if (string[i] == ch) {
//      counted += 1;
//    }
//  }
//  return counted;
// }
// function countBs(string) {
//  return countChar(string, "B");
// }
// console.log(countBs("BBC"));
// // → 2
// console.log(countChar("kakkerlak", "k"));


// let rty = undefined.length;
// console.log(rty);


// let arr = [1,2,3,4,88];
// let x = arr["length"]
// console.log(x)


// let doh = "Doh";
// console.log(typeof doh.toUpperCase);
// console.log(doh.toUpperCase());


// let day1 = {
//  squirrel: false,
//  events: ["work", "touched tree", "pizza", "running"]
// };
// console.log(day1.squirrel);
// // → false
// console.log(day1.wolf);
// // → undefined
// day1.wolf = "Been There";
// console.log(day1.wolf);
// // → false
// console.log(day1)


// let anObject = {left: 1, right: 2};
// console.log(anObject.left);
// // → 1
// delete anObject.left;
// console.log(anObject.left);
// // → undefined
// console.log("left" in anObject);
// // → false
// console.log("right" in anObject);
// // → true

// console.log(Object.keys({x: 0, y: 0, z: 2}));
// → ["x", "y", "z"]
// console.log(Object.values({x: 0, y: 0, z: 2}));
// → [0, 0, 2]

// let objectA = {a: 1, b: 2};
// Object.assign(objectA, {b: 3, c: 4, b: 4});
// console.log(objectA);
// // → {a: 1, b: 3, c: 4}
// let onj = {b: 3, c: 4, b: 4, b:3, b:4};
// console.log(onj);


// console.log(typeof []);
// let journal = [
//  {events: ["work", "touched tree", "pizza",
//            "running", "television"],
//   squirrel: false},
//  {events: ["work", "ice cream", "cauliflower",
//            "lasagna", "touched tree", "brushed teeth"],
//   squirrel: false},
//  {events: ["weekend", "cycling", "break", "peanuts",
//            "beer"],
//   squirrel: true}
// ];
// console.log(journal[0].events[4]);


// let object1 = {value: 10};
// let object2 = object1;
// let object3 = {value: 10};

// console.log(object1 == object2);
// // → true
// console.log(object1 == object3);
// // → false

// object1.value = 15;
// console.log(object2.value);
// // → 15
// console.log(object3.value);
// // → 10
// object2.value1 = 1;
// console.log(object1 == object2);


// const score = {visitors: 0, home: 0};
// // This is okay
// score.visitors = 1;
// // This isn't allowed
// score = {visitors: 1, home: 1};


// let journal = [];

// function addEntry(events, squirrel) {
//   journal.push({events, squirrel});
// }

// addEntry(["work", "touched tree", "pizza", "running",
//           "television"], false);
// addEntry(["work", "ice cream", "cauliflower", "lasagna",
//           "touched tree", "brushed teeth"], false);
// addEntry(["weekend", "cycling", "break", "peanuts",
//           "beer"], true);

// console.log(journal)


// let journal = [];
// events = ["work", "touched tree", "pizza", "running",
//           "television"];
// squirrel = false;
// journal.push({events, squirrel});
// console.log(journal)

// function fact(num){
//  let count = 0;
//  if(num%2 == 0) count++;
//  if(num%5 == 0)  count++;
//  return count
// }
// console.log(fact(10));

// const ap = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];

// const aCount = new Map([...new Set(ap)].map(
//     x => [x, ap.filter(y => y === x).length]
// ));
// console.log(aCount);
// let arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
// let ddd= arr.reduce(function(countMap, word) {countMap[word] = ++countMap[word] || 1;return countMap}, {});
// console.log(ddd);


//  let abc = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4].reduce(function (acc, curr) {
//  if (typeof acc[curr] == 'undefined') {
//    acc[curr] = 1;
//  } else {
//    acc[curr] += 1;
//  }

//  return acc;
// }, {});
// console.log(abc);

// console.log([1, 2, 3, 2, 1].indexOf(2));
// → 1
// console.log([1, 2, 3, 2, 1].lastIndexOf(2, 2));
// → 3

//console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
//console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]
// let arr = [0, 1, 2, 3, 4];
// let arr1 = arr.slice(1,3);
// console.log(arr);
// console.log(arr1);
// arr.splice(1,2);
// console.log(arr)

// console.log("coconuts".slice(4, 7));
// → nut
// console.log("coconut".indexOf("u"));
// → 5
// console.log("one two three ee".lastIndexOf("ee"));
// → 11

// console.log("  okay \n ".trim());
// → okay

// console.log(String(6).padStart(4, "0"));
// → 006

// let sentence = "Secretarybirds specialize in stomping";
// let words = sentence.split(" ");
// console.log(words);
// // → ["Secretarybirds", "specialize", "in", "stomping"]
// console.log(words.join(". "));
// // → Secretarybirds. specialize. in. stomping

// function max(...numbers) {
//  let result = -Infinity;
//  for (let number of numbers) {
//    if (number > result) result = number;
//  }
//  return result;
// }
// console.log(max(4, 1, 9, -2));
// // → 9

// let numbers = [5, 1, 7];
// console.log(max(...numbers));
// // → 7
// console.log(max(9, ...numbers, 2));

// let words = ["never", "fully"];
// console.log(["will", ...words, "understand"]);
// → ["will", "never", "fully", "understand"]

// function randomPointOnCircle(radius) {
//  let angle = Math.random() * 2 * Math.PI;
//  return {x: radius * Math.cos(angle),
//          y: radius * Math.sin(angle)};
// }
// console.log(randomPointOnCircle(2));
// → {x: 0.3667, y: 1.966}
//console.log(Math.floor(Math.random()*10));

// let {age, name} = {name: "Faraji", age:23};
// console.log(age);
// console.log(name);

// let string = {
//  "squirrel": false,
//  "events": ["work", "touched tree", "pizza", "running"]
// }
// let string1 = JSON.stringify(string);
// console.log(string1);
// let string2  = JSON.parse(string1);
// console.log(string2);


// function range(start, end){
//   let arr = []
//   for(let i = start; i<=end; i++){
//    arr.push(i);
//   }
//   return arr;
// }

// function sum(arr){
//  return arr.reduce(((acc,curr)=> acc + curr),0);
// }
// console.log(sum(range(1,10)));

// The Sum Of range
// function range(start, end, step = start < end ? 1 : -1) {
//  let array = [];

//  if (step > 0) {
//    for (let i = start; i <= end; i += step) array.push(i);
//  } else {
//    for (let i = start; i >= end; i += step) array.push(i);
//  }
//  return array;
// }

// function sum(array) {
//  let total = 0;
//  for (let value of array) {
//    total += value;
//  }
//  return total;
// }

// console.log(range(1, 10))
// // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(5, 2, -1));
// // → [5, 4, 3, 2]
// console.log(sum(range(1, 10)));


// function reverseArray(arr){
//  let arr1 = []
//  for(let i = arr.length;i>0; i--){
//   arr1.push(arr[i-1]);
//  }
//  return arr1;
// }
// console.log(reverseArray([1,2,3,4,5]));

// function reverseArrayInPlace(arr) {
//  let len = Math.floor(arr.length / 2)
//  for (let i = 0; i < len; i++) {
//    let temp = arr[i];
//    arr[i] = arr[arr.length - 1 - i];
//    arr[arr.length - 1 - i] = temp;
//  }
//  return arr;
// }

// //console.log(reverseArray(["A", "B", "C"]));
// // → ["C", "B", "A"];
// let arrayValue = [1, 2, 3, 6, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);

