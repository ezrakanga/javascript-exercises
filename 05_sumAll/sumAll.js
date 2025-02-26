const sumAll = function(a , b) {
  let sum = 0;
  
  let min = Math.min(a , b);  //gets the smallest number from the two parameters
  let max = Math.max(a , b);  //gets the largest number from the two parameters

  if (
    a < 0 || b < 0 ||  //checks to make sure the numbers are positive
    !Number.isInteger(a) || !Number.isInteger(b) ||  //checks whether the number is an integer
    typeof a !== `number` || typeof b !== `number`   //checks if the data passed is strictly equals to number data type
  ) {
    return `ERROR`;
  }

  for (let i = min; i <= max; i++) {  //loops through the parameters and adds each number to the previous sum
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
