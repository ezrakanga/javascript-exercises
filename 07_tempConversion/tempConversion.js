const convertToCelsius = function(fahrenheit) {
  let celsius = 0;
  celsius = (fahrenheit - 32) * 5 / 9;  //converts fahrenheit to celsius
  celsius = celsius.toFixed(1);  //makes it to 1 decimal place and converts it to a string
  celsius = parseFloat(celsius);  //converts the string to a number
  return celsius;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = 0;
  fahrenheit = (celsius * 9 / 5) + 32;
  fahrenheit = fahrenheit.toFixed(1);
  fahrenheit = parseFloat(fahrenheit);
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
