const convertToCelsius = function(fahrenheit) {
  let celsius = 0;
  celsius = (fahrenheit - 32) * 5 / 9;
  return celsius;
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
