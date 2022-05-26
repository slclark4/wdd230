let temp = document.getElementById("temp").textContent;
let windSpeed = document.getElementById("windSpeed").textContent;
let windChill;

temp = parseFloat(temp);
windSpeed = parseFloat(windSpeed);

if (temp <= 50 && windSpeed > 3) {
  windChill =
    35.74 +
    0.615 * temp -
    35.75 * Math.pow(windSpeed, 0.16) +
    0.4275 * temp * Math.pow(windSpeed, 0.16);
} else {
  windChill = "N/A";
}

document.getElementById("windChill").textContent = Math.round(windChill);
