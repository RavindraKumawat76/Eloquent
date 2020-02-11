let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  },
  value: 10
};

//  Classes
function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}

function Rabbit(type) {
  this.type = type;
}

Rabbit.prototype.speak = function (line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
};

let weirdRabbit = new Rabbit("weird");
console.log(Object.getPrototypeOf(Rabbit) ==
  Function.prototype);
// → true
console.log(Object.getPrototypeOf(weirdRabbit) ==
  Rabbit.prototype);
// → true
weirdRabbit.speak("fgdf");