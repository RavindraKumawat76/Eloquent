function flatten(array, combine, start){
 let current = start;
 for(let element of array){
   current = combine(current, element);  
 }
 return current;
}
console.log(flatten([[1,2,3],[4,5],[6]], (a , b) => a.concat(b),[]));

console.log([[1,2,3],[4,5],[6]].reduce((a,b)=> a.concat(b),[]))