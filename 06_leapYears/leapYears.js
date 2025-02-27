const leapYears = function(year) {
  if (year % 100 === 0) {
    return year % 400 === 0;  //if divisible by 100, it must also be divisible by 400
  } else {
    return year % 4 === 0;  // otherwise, it just needs to be divisible by 4
  }
};

// Do not edit below this line
module.exports = leapYears;
