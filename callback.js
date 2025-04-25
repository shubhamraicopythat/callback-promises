// function h(x, fn) {
//   // h -> is a hof
//   // fn -> Callback
//   console.log(x * x);
//   fn(x * x);
// }
// h(10, exc);
// function exc(n) {
//   console.log("squared value is : ", n);
// }
console.log("start");
setTimeout(function f() {
  console.log("timer done");
}, 3000);
console.log("end");

function greet(name, callback) {
  console.log("Hello, " + name + "!");
  callback(); // Call the callback function
}

function sayGoodbye() {
  console.log("Goodbye!");
}

// Call the greet function and pass sayGoodbye as a callback
greet("Alice", sayGoodbye);

//
fs.readdir(source, function (err, files) {
  if (err) {
    console.log("Error finding files: " + err);
  } else {
    files.forEach(function (filename, fileIndex) {
      console.log(filename);
      gm(source + filename).size(function (err, values) {
        if (err) {
          console.log("Error identifying file size: " + err);
        } else {
          console.log(filename + " : " + values);
          aspect = values.width / values.height;
          widths.forEach(
            function (width, widthIndex) {
              height = Math.round(width / aspect);
              console.log(
                "resizing " + filename + "to " + height + "x" + height
              );
              this.resize(width, height).write(
                dest + "w" + width + "_" + filename,
                function (err) {
                  if (err) console.log("Error writing file: " + err);
                }
              );
            }.bind(this)
          );
        }
      });
    });
  }
});
