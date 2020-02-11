// let eighteenPlus = /eighteen\+/;
// console.log(eighteenPlus);
// console.log(eighteenPlus.test("keeighteen\+"));
// console.log("keeighteen\+".match(eighteenPlus)); // [ 'eighteen+', index: 2, input: 'keeighteen+', groups: undefined ]

// console.log(/[0123456789]/.test("in 1992")); // → true
// console.log(/[0-9]/.test("in 1992")); // → true

// let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
// console.log(dateTime.test("01-30-2003 15:20")); // → true
// console.log(dateTime.test("30-jan-2003 15:20")); // → false

// let notBinary = /[^01]/;
// console.log(notBinary.test("1100100010100110")); // → false
// console.log(notBinary.test("1100100010200110")); // → true

// console.log(/'\d+'/.test("'123'")); // → true
// console.log(/'\d+'/.test("''")); // → false
// console.log(/'\d*'/.test("'123'")); // → true
// console.log(/'\d*'/.test("''")); // → true

// let neighbor = /neighbou?r/;
// console.log(neighbor.test("neighbour")); // → true
// console.log(neighbor.test("neighbor")); // → true

// let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
// console.log(dateTime.test("1-30-2003 8:45")); // → true
// console.log("1-30-2003 8:45".match(dateTime)); //[ '1-30-2003 8:45', index: 0, input: '1-30-2003 8:45', groups: undefined ]

// let cartoonCrying = /boo+(hoo+)+/i;
// //console.log(cartoonCrying.test("Boohoooohoohooo")); // → true
// console.log("Boohoooohoohooo".match(cartoonCrying));

 // let cartoon = /(boo+)(hoo+)+/i;
 // console.log("Boohoooohoohooo".match(cartoon));


// let cartoon1 = /(boo+)|(hoo+)+/i;
// console.log("Boohoooohoohooo".match(cartoon1));

// let match = /\d+/.exec("one two 1000");
// console.log(match); // → ["100"]
// console.log(match.index); // → 8
// console.log("one two 100".match(/\d+/));
// → ["100"]

// let quotedText = /'([^']*)'/;
// console.log(quotedText.exec("she said 'hello'"));
// → ["'hello'", "hello"]

// console.log(/bad(ly)?/.exec("bad")); // → ["bad", undefined]
// console.log(/(\d)+/.exec("123")); // → ["123", "3"]

// console.log(new Date());
// // → Mon Nov 13 2017 16:19:11 GMT+0100 (CET)

// console.log(new Date(2009, 11, 9));
// // → Wed Dec 09 2009 00:00:00 GMT+0100 (CET)
// console.log(new Date(2009, 11, 9, 12, 59, 59, 999));
// // → Wed Dec 09 2009 12:59:59 GMT+0100 (CET)

// console.log(new Date(2013, 11, 19).getTime());
// // → 1387407600000
// console.log(new Date(1387407600000));
// // → Thu Dec 19 2013 00:00:00 GMT+0100 (CET)

// function getDate(string) {
//  let [_, month, day, year] =
//    /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
//  return new Date(year, month - 1, day);
// }
// console.log(getDate("1-30-2003"));
// → Thu Jan 30 2003 00:00:00 GMT+0100 (CET) => 2003-01-29T18:30:00.000Z

// console.log(/cat/.test("concatenate")); // → true
// console.log(/\bcat\b/.test("concatenate")); // → false
// console.log(/cat/.test("con catenate")); // → true
// console.log(/\bcat\b/.test("cat")); // → true
// console.log(/cat/.test("concat enate")); // → true
// console.log(/cat/.test("con cat enate")); // → true

// let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
// console.log(animalCount.test("15 pigs")); // → true
// console.log(animalCount.test("15 pigchickens")); // → false
// console.log(animalCount.test("15 pig chickens")); // → true
// console.log(animalCount.test("pig 15 pig chickens")); // → true

// let regex = /^.*x/;
// console.log(regex.exec("abcxe"))

// let regex = /p/ig;
// console.log("papa".replace("p", "m")); // mapa
// console.log("papa".replace(regex, "m")); // → mama

// console.log("Borobudur".replace(/[ou]/, "a")); // → Barobudur
// console.log("Borobudur".replace(/[ou]/g, "a")); // → Barabadar

// console.log(
//  "Liskov, Barbara\nMcCarthy, John\nWadler, Philip"
//    .replace(/(\w+), (\w+)/g, "$2 $1"));
// → Barbara Liskov
//   John McCarthy
//   Philip Wadler

// let s = "the cia and fbi";
// console.log(s.replace(/\b(fbi|cia)\b/g,
//             str => str.toUpperCase()));
// → the CIA and FBI


// let stock = "1 lemon, 2 cabbages, and 101 eggs";
// function minusOne(match, amount, unit) {
//   // console.log(match);
//   // console.log(amount);
//   // console.log(unit);
//   amount = Number(amount) - 1;
//   if (amount == 1) { // only one left, remove the 's'
//     unit = unit.slice(0, unit.length - 1);
//   } else if (amount == 0) {
//     amount = "no";
//   }
//   return amount + " " + unit;
// }
// console.log(stock.replace(/(\d+) (\w+)/g, minusOne));
// // → no lemon, 1 cabbage, and 100 eggs


// function stripComments(code) {
//  return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
// }
// console.log(stripComments("1 + /* 2 */3")); // → 1 + 3
// console.log(stripComments("x = 10;// ten!")); // → x = 10;
// console.log(stripComments("1 /* a */+/* b */ 1")); // → 1  1

// function stripComments1(code) {
//  return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
// }
// console.log(stripComments1("1 /* a */+/* b */ 1"));
// → 1 + 1

// let name = "harry";
// let text = "Harry is a suspicious character.";
// let regexp = new RegExp("\\b(" + name + ")\\b", "gi");
// console.log(text.replace(regexp, "_$1_")); // → _Harry_ is a suspicious character.

// let name = "dea+hl[]rd";
// let text = "This dea+hl[]rd guy is super annoying.";
// let escaped = name.replace(/[\\[.+*?(){|^$]/g, "\\$&");
// let regexp = new RegExp("\\b" + escaped + "\\b", "gi");
// console.log(text.replace(regexp, "_$&_")); // → This _dea+hl[]rd_ guy is super annoying.

// console.log("  word".search(/\S/)); // → 2
// console.log("  word".indexOf('w')); // 2
// console.log("    ".search(/\S/)); // → -1

// let pattern = /y/g;
// pattern.lastIndex = 3;
// let match = pattern.exec("xyzzy");
// console.log(match)
// console.log(match.index); // → 4
// console.log(pattern.lastIndex); // → 5

// let global = /abc/g;
// console.log(global.exec("xyz abc")); // → ["abc"]
// let sticky = /abc/y;
// console.log(sticky.exec("xyz abc")); // → null

// let digit = /\d/g;
// console.log(digit.exec("here it is: 1")); // → ["1"]
// console.log(digit.exec("and now: 1")); // → null

// console.log("Banana".match(/an/g));

// let input = "A string with 3 numbers in it... 42 and 88.";
// let number = /\b\d+\b/g;
// let match;
// while (match = number.exec(input)) {
//   console.log("Found", match[0], "at", match.index);
// }
// → Found 3 at 14
//   Found 42 at 33
//   Found 88 at 40

function parseINI(string) {
 // Start with an object to hold the top-level fields
 let result = {};
 let section = result;
 string.split(/\r?\n/).forEach(line => {
   let match;
   if (match = line.match(/^(\w+)=(.*)$/)) {
     section[match[1]] = match[2];
   } else if (match = line.match(/^\[(.*)\]$/)) {
     section = result[match[1]] = {};
   } else if (!/^\s*(;.*)?$/.test(line)) {
     throw new Error("Line '" + line + "' is not valid.");
   }
 });
 return result;
}

console.log(parseINI(`
name=Vasilis
[address]
city=Tessaloniki`));
// → {name: "Vasilis", address: {city: "Tessaloniki"}}