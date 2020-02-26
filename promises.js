// // let p =  new Promise((resolve, reject) => {
// //     let p =  1+1
// //     if (p==2){
// //         resolve('Resolved')
// //     } else {
// //         reject('Rejected')
// //     }
// // });
// // p.then((message)=>console.log('Promises is ' + message)).catch((message)=> console.log('Promises is '+message));

// // function taskCompleted(){
// //     return new Promise((resolve, reject) => {
// //         resolve('Task is completed')
// //     });
// // }

// // function taskFailed(message) {
// //     return new Promise((resolve, reject) => {
// //         reject(message + 'Task is Failed');
// //     })
// // }
// // taskCompleted().then((result)=> {return taskFailed(result)}).then((result) => console.log("finished!" + result))

// // let fifteen = Promise.resolve(15);
// // fifteen.then(value => console.log(`Got ${value}`));
// // // → Got 15


// // new Promise((_, reject) => reject(new Error("Fail")))
// //   .then(value => console.log("Handler 1"))
// //   .catch(reason => {
// //     console.log("Caught failure " + reason);
// //     return "nothing";
// //   })
// //   .then(value => console.log("Handler 2", value));
// // // → Caught failure Error: Fail
// // // → Handler 2 nothing

// // function* powers(n) {
// //     for (let current = n;; current *= n) {
// //       yield current;
// //     }
// //   }
  
// //   for (let power of powers(3)) {
// //     if (power > 50) break;
// //     console.log(power);
// //   }
// //   // → 3
// //   // → 9
// //   // → 27

// //   let start = Date.now();
// // setTimeout(() => {
// //   console.log("Timeout ran at", Date.now() - start);
// // }, 20);
// // while (Date.now() < start + 50) {}
// // console.log("Wasted time until", Date.now() - start);
// // // → Wasted time until 50
// // // → Timeout ran at 55

// // Promise.resolve("Done").then(console.log);
// // console.log("Me first!");
// // // → Me first!
// // // → Done



// function resolveAfter2Seconds() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('resolved');
//     }, 2000);
//   });
// }

// async function asyncCall() {
//   console.log('calling');
//   const result = await resolveAfter2Seconds();
//   console.log('Calling again')
//   console.log(result);
//   // expected output: 'resolved'
// }

// asyncCall();


function resolveAfter2Seconds() {
  console.log("starting slow promise")
  return new Promise(resolve => {
    setTimeout(function() {
      resolve("slow")
      console.log("slow promise is done")
    }, 2000)
  })
}

function resolveAfter1Second() {
  console.log("starting fast promise")
  return new Promise(resolve => {
    setTimeout(function() {
      resolve("fast")
      console.log("fast promise is done")
    }, 1000)
  })
}

async function sequentialStart() {
  console.log('==SEQUENTIAL START==')

  // 1. Execution gets here almost instantly
  const slow = await resolveAfter2Seconds()
  console.log(slow) // 2. this runs 2 seconds after 1.

  const fast = await resolveAfter1Second()
  console.log(fast) // 3. this runs 3 seconds after 1.
}

// sequentialStart()

async function concurrentStart() {
  console.log('==CONCURRENT START with await==');
  const slow = resolveAfter2Seconds() // starts timer immediately
  const fast = resolveAfter1Second() // starts timer immediately

  // 1. Execution gets here almost instantly
  console.log(await slow) // 2. this runs 2 seconds after 1.
  console.log(await fast) // 3. this runs 2 seconds after 1., immediately after 2., since fast is already resolved
}
// concurrentStart()

function concurrentPromise() {
  console.log('==CONCURRENT START with Promise.all==')
  return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
    console.log(messages[0]) // slow
    console.log(messages[1]) // fast
  })
}
// concurrentPromise()

async function parallel() {
  console.log('==PARALLEL with await Promise.all==')
  
  // Start 2 "jobs" in parallel and wait for both of them to complete
  await Promise.all([
      (async()=>console.log(await resolveAfter2Seconds()))(),
      (async()=>console.log(await resolveAfter1Second()))()
  ])
}
// parallel()

// // This function does not handle errors. See warning below!
function parallelPromise() {
  console.log('==PARALLEL with Promise.then==')
  resolveAfter2Seconds().then((message)=>console.log(message))
  resolveAfter1Second().then((message)=>console.log(message))
}

// parallelPromise()

// sequentialStart() // after 2 seconds, logs "slow", then after 1 more second, "fast"

// // wait above to finish
// setTimeout(concurrentStart, 4000) // after 2 seconds, logs "slow" and then "fast"

// // wait again
// setTimeout(concurrentPromise, 7000) // same as concurrentStart

// // wait again
// setTimeout(parallel, 10000) // truly parallel: after 1 second, logs "fast", then after 1 more second, "slow"

// // wait again
// setTimeout(parallelPromise, 13000) // same as parallel

function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
};


// const add = async function(x) { // async function expression assigned to a variable
//   let a = await resolveAfter2Seconds(20);
//   let b = await resolveAfter2Seconds(30);
//   return x + a + b;
// };

// add(10).then(v => {
//   console.log(v);  // prints 60 after 4 seconds.
// });


(async function(x) { // async function expression used as an IIFE
  let p_a = resolveAfter2Seconds(20);
  let p_b = resolveAfter2Seconds(30);
  return x + await p_a + await p_b;
})(10).then(v => {
  console.log(v);  // prints 60 after 2 seconds.
});