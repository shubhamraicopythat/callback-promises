function createPromise() {
  return new Promise(function exec(resolve, reject) {
    // your code goes here
    setTimeout(function f() {
      console.log("timer done");
    }, 3000);
  });
}
console.log("start");
let x = createPromise();
console.log("got a new promises");
x.then(function f() {
  console.log("Promises Done");
});
for (let i = 0; i < 1000000; i++) {}

// const myPromise = new Promise((resolve, reject) => {
//   const success = true; // Simulate success or failure

//   if (success) {
//     resolve("Operation was successful!");
//   } else {
//     reject("Operation failed.");
//   }
// });

// myPromise
//   .then((result) => {
//     console.log(result); // Logs: "Operation was successful!"
//   })
//   .catch((error) => {
//     console.error(error); // Logs: "Operation failed."
//   });

// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data fetched!");
//     }, 2000);
//   });
// };

// fetchData()
//   .then((data) => {
//     console.log(data); // Logs: "Data fetched!"
//     return "Processing data...";
//   })
//   .then((processedData) => {
//     console.log(processedData); // Logs: "Processing data..."
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// const promise1 = Promise.resolve("First promise resolved!");
// const promise2 = new Promise((resolve) => {
//   setTimeout(() => resolve("Second promise resolved!"), 1000);
// });
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("Third promise rejected!"), 500);
// });

// Promise.all([promise1, promise2])
//   .then((results) => {
//     console.log(results); // This will not run if any promise is rejected
//   })
//   .catch((error) => {
//     console.error("Error:", error); // Logs: "Error: Third promise rejected!"
//   });

/// blocking peacies of code

/* Summary
1.Promises are a way to handle asynchronous operations in JavaScript.
2.They can be in one of three states: pending, fulfilled, or rejected.
3.You can use .then() to handle fulfilled promises and .catch() to handle rejections.
4.Promises can be chained for sequential asynchronous operations.
5.Promise.all() allows you to run multiple promises in parallel.
6.async/await provides a more readable way to work with promises.
7.If you have any further questions or need more examples, feel free to ask! */
