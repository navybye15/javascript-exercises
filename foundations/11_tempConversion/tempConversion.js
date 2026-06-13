const convertToCelsius = function(farenheit) {
  let result = Number(((farenheit-32) * (5/9)).toFixed(1));
  return result;
};

const convertToFahrenheit = function(celsius) {
  let result = Number(((celsius*1.8) + (32)).toFixed(1));
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
