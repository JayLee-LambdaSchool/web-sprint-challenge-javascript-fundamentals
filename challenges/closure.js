// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
// Closure is a way to understand how different functions can see outside of themselves and into the global scope. Which is why everything inside of the curly braces is enclosed and known as the closure. It's like a one way mirror.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(num) {
  let count = 0;

  for (let i = 0; i < num; i++) {
    // console.log(i + 1)
    function addIndex(num) {
      return num + 1
    }
    // console.log(addIndex(i))
    count = count + addIndex(i)
  }

  return count
}

console.log(summation(4));
