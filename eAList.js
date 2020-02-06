// A List
function arrayToList(array) {
 let list = null;
 for (let i = array.length - 1; i >= 0; i--) {
   list = {value: array[i], rest: list};
   //console.log(list)
 }
 return list;
}
//console.log(arrayToList([10, 20]));
// list = arrayToList([10, 20, 30]);
// console.log(list)

function listToArray(list) {
 let array = [];
 for (let node = list; node; node = node.rest) {
   array.push(node.value);
 }
 return array;
}

// function listToArray(list) {
//  if (list.rest == null) return list.value;
//  else return listToArray(list.rest);
// }
// console.log(listToArray(list));


function prepend(value, list) {
 return {value, rest: list};
}

function nth(list, n) {
 //console.log(list);
 if (!list) return undefined;
 else if (n == 0) return list.value;
 else return nth(list.rest, n - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20