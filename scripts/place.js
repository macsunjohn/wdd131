// Static weather values (matches your screenshot)
const temperature = 10;
const windSpeed = 5;
const condition = "Partly Cloudy";

// Wind chill calculation
function calculateWindChill(temp, speed) {
  if (temp <= 10 && speed > 4.8) {
    return (
      13.12 +
      0.6215 * temp -
      11.37 * Math.pow(speed, 0.16) +
      0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
  } else {
    return temp.toFixed(1);
  }
}

// Display values
document.getElementById("temp").textContent = temperature;
document.getElementById("condition").textContent = condition;
document.getElementById("wind").textContent = windSpeed;
document.getElementById("chill").textContent =
  calculateWindChill(temperature, windSpeed);

// Last modified
document.getElementById("lastModified").textContent =
  document.lastModified;