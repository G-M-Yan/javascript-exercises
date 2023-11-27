const convertToCelsius = function(fahreinheit) {
  tempCelsius = (fahreinheit - 32) * 5/9;
  return parseFloat(tempCelsius.toFixed(1));
};

const convertToFahrenheit = function(celcius) {
  tempFahreinheit = celcius * 9/5 + 32;
  return parseFloat(tempFahreinheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
