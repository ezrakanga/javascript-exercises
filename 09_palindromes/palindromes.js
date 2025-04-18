const palindromes = function (string) {
  // Process the string: lowercase and remove non-alphanumeric characters
  const processedString = string.toLowerCase().replace(/[^a-z0-9]/g, '');
  // Reverse the processed string
  const reverseString = processedString.split('').reverse().join('');
  // Check if reversed string matches the processed original
  return reverseString === processedString;
};

// Do not edit below this line
module.exports = palindromes;
