function createPromise() {
  return new Promise(function exec(resolve, reject) {
    // your code goes here
    setTimeout(function f() {
      console.log("timer done");
    }, 3000);
  });
}
