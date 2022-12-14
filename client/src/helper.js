// Helper functions
function kelvinToCelsius(kelvin) {
  let conversionRounded = (kelvin - 273.15).toFixed(2);
  return `${conversionRounded}°C`;
}
function kelvinToFahrenheit(kelvin) {
  let conversion = (((kelvin - 273.15) * 9) / 5 + 32).toFixed(2);
  return `${conversion}°F`;
}

export { kelvinToCelsius, kelvinToFahrenheit };
