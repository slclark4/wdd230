let temp = document.getElementById("temp").textContent;
let speedOfWind = document.getElementById("windSpeed").textContent;
let windChill;

temp = parseFloat(temp);
speedOfWind = parseFloat(speedOfWind);

if (temp <= 50 && speedOfWind > 3) {
  windChill =
    35.74 +
    0.615 * temp -
    35.75 * Math.pow(speedOfWind, 0.16) +
    0.4275 * temp * Math.pow(speedOfWind, 0.16);
  document.getElementById("windChill").textContent = Math.round(windChill);
} else {
  windChill = "N/A";
  document.getElementById("windChill").textContent = windChill;
}
