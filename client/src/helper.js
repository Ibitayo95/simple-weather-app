// Helper functions
function kelvinToCelsius(kelvin) {
  let conversion = kelvin - 273.15;
  return conversion.toFixed(2);
}
function kelvinToFahrenheit(kelvin) {
  return ((kelvin - 273.15) * 9) / 5 + 32;
}

export { kelvinToCelsius, kelvinToFahrenheit };
