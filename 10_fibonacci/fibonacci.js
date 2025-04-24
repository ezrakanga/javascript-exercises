const fibonacci = function(num) {
  // initialize the first 2 numbers and an empty sum variable
  let num1 = 0;
  let num2 = 1;
  let sum;

  if (num === 0) {
    return num1;
  } else if (num === 1) {
    return num2;
  } else {
    for (let i = 2; i <= num; i++) {
      sum = num1 + num2;
      num1 = num2;
      num2 = sum;
    }
    return num2;
  }
};

// Do not edit below this line
module.exports = fibonacci;
