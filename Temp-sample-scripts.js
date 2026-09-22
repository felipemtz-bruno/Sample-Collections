/**
 * Temperature helpers for the Weather API collection.
 *
 * Usage in a Bruno script (pre-request, post-response or tests):
 *
 *   const { kelvinToFahrenheit } = require('./Temp-sample-scripts.js');
 *
 *   const tempF = kelvinToFahrenheit(res('main.temp'));
 *   bru.setVar('tempF', tempF);
 *
 * Note: requiring a local file needs the collection's JavaScript sandbox
 * set to "Developer Mode" (Collection Settings -> Script).
 */

/**
 * Convert a temperature from Kelvin to Fahrenheit.
 *
 * @param {number|string} kelvin - Temperature in Kelvin (e.g. 289.15).
 * @param {number} [decimals=2] - Decimal places to round to.
 * @returns {number} Temperature in Fahrenheit.
 */
function kelvinToFahrenheit(kelvin, decimals = 2) {
  const k = Number(kelvin);

  if (!Number.isFinite(k)) {
    throw new TypeError(`kelvinToFahrenheit: expected a number, got "${kelvin}"`);
  }

  const fahrenheit = (k - 273.15) * (9 / 5) + 32;

  return Number(fahrenheit.toFixed(decimals));
}

module.exports = { kelvinToFahrenheit };
