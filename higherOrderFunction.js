function repeat(n, action) {
 for (let i = 0; i < n; i++) {
   action(i);
 }
}
// repeat(3, console.log);
// → 0
// → 1
// → 2

let labels = [];
repeat(5, x => {
  labels.push(`Unit ${x + 1}`);
});
//console.log(labels);
// → ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]

function greaterThan(n) {
 return m => m > n;
}
let greaterThan10 = greaterThan(10);
//console.log(greaterThan10(11));
// → true

function noisy(f) {
 return (...args) => {
   console.log("calling with", args);
   let result = f(...args);
   console.log("called with", args, ", returned", result);
   return result;
 };
}
// noisy(Math.min)(3, 2, 1);

let min1 = noisy(Math.min);
//console.log(min1(1,2,3))
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1

function unless(test, then) {
 if (test) then();
}

// repeat(3, n => {
//  unless(n % 2 == 0, () => {
//    console.log(n, "is even");
//  });
// });
// → 0 is even
// → 2 is even

// ["A", "B"].forEach(l => console.log(l));
// → A
// → B