// Task 1
// Takes one parameter x and returns an anonymous function with one parameter y, and returns the product of x * y

function multiplier(x) {
  return function (y) {
    return x * y;
  }
}
   
// Task 2
// Accepts an array of numbers and returns a function which returns a random number from this array

function makeRandomFn(arr = []) {
  if (arr.length === 0) {
    return;
  }
  return function () {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  };
}

// Task 3
// Overloading the function makeRandomFn so that you can pass the range not only through an array but as arguments
// separated by commas

function makeRandomFnOverload(...arr) {
  if (arr.length === 0) {
    return;
  }

  if (Array.isArray(...arr)) {
    arr = arr[0];
  }
  return function randomizer() {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }();
}
