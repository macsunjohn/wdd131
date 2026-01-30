// ----------------------------
// FOOTER DATES
// ----------------------------
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// ----------------------------
// WEATHER VALUES
// ----------------------------
const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);
const chill = document.getElementById("chill");

// ----------------------------
// WIND CHILL FUNCTION (METRIC)
// ----------------------------
function calculateWindChill(t, w) {
    return (
        13.12 +
        0.6215 * t -
        11.37 * Math.pow(w, 0.16) +
        0.3965 * t * Math.pow(w, 0.16)
    ).toFixed(1);
}

// ----------------------------
// APPLY RULES
// ----------------------------
if (temp <= 10 && wind > 4.8) {
    chill.textContent = calculateWindChill(temp, wind) + " °C";
} else {
    chill.textContent = "N/A";
}