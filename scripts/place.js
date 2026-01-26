const temp = 10;       // °C
const windSpeed = 5;  // km/h

function calculateWindChill(t, v) {
  return 13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16);
}

let windChill = "N/A";

if (temp <= 10 && windSpeed > 4.8) {
  windChill = calculateWindChill(temp, windSpeed).toFixed(1) + " °C";
}

document.getElementById("windchill").textContent = windChill;
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;