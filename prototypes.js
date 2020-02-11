let empty = {};
console.log(empty.toString);
// → function toString(){…}
// → [Function: toString]

console.log(empty.toString());
// → [object Object]

console.log(Object.getPrototypeOf({}) == Object.prototype);
// → true
console.log(Object.getPrototypeOf(Object.prototype));
// → null
console.log(Object.getPrototypeOf([]) == Array.prototype);
// → true
console.log(Object.getPrototypeOf(Array.prototype));
// → {}

// let dig = {tr:"row", er:"erru"};
// let pe = dig.toString()
// console.log(pe);

console.log(Object.getPrototypeOf(Math.max) ==
            Function.prototype);
// → true
console.log(Object.getPrototypeOf([]) ==
            Array.prototype);
// → true
console.log(Function.prototype); // [Function]
console.log(Object.getPrototypeOf(Math.max)) // [Function]
console.log(Object.getPrototypeOf(Math.max())); // [Number: 0]


// Object.create
let protoRabbit = {
 speak(line) {
   console.log(`The ${this.type} rabbit says '${line}'`);
 }, 
 value: 10
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");
// → The killer rabbit says 'SKREEEE!'
killerRabbit.speed = function (kmh){
  console.log(`The speed of ${this.type} is ${kmh}`)
}
console.log(protoRabbit);
console.log(killerRabbit);
killerRabbit.speed(150);

// Gets Overrides
let jumpRabbit = {
 jump(leap) {
    console.log(`The ${this.type} rabbit can jump the distance of ${leap}meter at a time.`)
 }
};
let smallRabbit = Object.create(jumpRabbit);
smallRabbit.type = "Small";
smallRabbit.jump(4);
console.log(smallRabbit)


//  Classes
function makeRabbit(type){
 let rabbit = Object.create(protoRabbit);
 rabbit.type = type;
 return rabbit;
}

function Rabbit(type) {
 this.type = type;
}

Rabbit.prototype.speak = function(line) {
 console.log(`The ${this.type} rabbit says '${line}'`);
};

let weirdRabbit = new Rabbit("weird");
console.log(Object.getPrototypeOf(Rabbit) ==
            Function.prototype);
// → true
console.log(Object.getPrototypeOf(weirdRabbit) ==
            Rabbit.prototype);
// → true