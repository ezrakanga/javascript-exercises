const sumAll = function(a , b) {
  let sum = 0;

  if (a < 0 || b < 0) {
    return `ERROR`;
  }

  let min = Math.min(a , b);
  let max = Math.max(a , b);

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
