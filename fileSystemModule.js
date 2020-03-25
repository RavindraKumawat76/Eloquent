// let {readFile} = require("fs");
// readFile("file.txt", "utf8", (error, text) => {
//   if (error) throw error;
//   console.log("The file contains:", text);
// });




//  If you do not pass an encoding, Node will assume you are interested in the binary data and will give you a Buffer object instead of a string. This is an array-like object that contains numbers representing the bytes (8-bit chunks of data) in the files.

// const {readFile} = require("fs");
// readFile("file.txt", (error, buffer) => {
//   if (error) throw error;
//   console.log("The file contained", buffer.length, "bytes.",
//               "The first byte is:", buffer[0]);
// });


// const {writeFile} = require("fs");
// writeFile("graffiti.txt", "Node was here that is updated now.", err => {
//   if (err) console.log(`Failed to write file: ${err}`);
//   else console.log("File written.");
// });



// const {readFile} = require("fs").promises;
// readFile("file.txt", "utf8")
//   .then(text => console.log("The file contains:", text)).catch(err => console.log('Yoyo Nigga focus!!! this file path I did not even found on google map. How I am going to find it here'));


// Sync version of file 
// const {readFileSync} = require("fs");
// console.log("The file contains:",
//             readFileSync("file.txt", "utf8"));