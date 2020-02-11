// function Bird() {
//   let arr = [];
//   this.getWeight = function(value){
//     arr.push(value)
//     return arr;
//   }
// }
// let bird1 = new Bird();
// console.log(bird1.getWeight(4));
// console.log(bird1.getWeight(5));

function bird() {
 const arrr = []
 function addEle(value) {
  arrr.push(value);
  return arrr;
 }
 return addEle;
}
let bird1 = bird();
// bird1(4);
// console.log(bird1(3))
console.log(bird1(3))

