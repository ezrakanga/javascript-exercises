const add = function(a, b) {
	return a + b;
};

const subtract = function(a , b) {
	return a - b;
};

const sum = function(arr) {
	let total = 0;

  // loop through array with forEach
  arr.forEach(arr => {
    total += arr;
  });

  return total;
};

const multiply = function(arr) {
  let total = 1;

  // loop through array with for...of loop
  for (let multiple of arr) {
    total *= multiple;
  }

  return total;
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(num) {
	let total = num;

  // create a condition
  if (num == 0 || num == 1) {
    return 1;
  }

  // create a while loop
  while (num > 1) {
    num--;
    total *= num;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
