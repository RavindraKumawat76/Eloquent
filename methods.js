let rabbit = {};
rabbit.speak = function(line) {
  console.log(`The rabbit says '${line}'`);
};

rabbit.speak("I'm alive.");
// → The rabbit says 'I'm alive.'


function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("Oh my ears and whiskers, " +
                  "how late it's getting!");
// → The white rabbit says 'Oh my ears and whiskers, how late it's getting!'
   
hungryRabbit.speak("I could use a carrot right now.");
// → The hungry rabbit says 'I could use a carrot right now.'

speak.call(hungryRabbit, "Burp!");
// → The hungry rabbit says 'Burp!'

function normalize() {
  console.log(this.coords.map(n => n / this.length));
}
normalize.call({coords: [0, 2, 3], length: 5});
// → [0, 0.4, 0.6]


function swim(target){
  console.log(`My trip to ${this.trip} has been started. My favorite destination is ${this.destination}. Trip to ${this.destination} is ${this.days} days Journey. My ${target} budgets is ${this.budgets}`);
}
let tripPlan = {trip: "maldiv", destination: "Balli", days : 16, budgets: 700000, swim};

swim.call(tripPlan, "Maximum")
tripPlan.swim("Minimum");