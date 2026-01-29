// Static weather values (Nigeria)
const temperature = 28; // °C
const windSpeed = 10;   // km/h

// Footer information
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Wind chill function (one-line return)
function calculateWindChill(temp, speed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16)
  ).toFixed(1);
}

// Wind chill logic
const chillElement = document.getElementById("chill");

if (temperature <= 10 && windSpeed > 4.8) {
  chillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
  chillElement.textContent = "N/A";
}