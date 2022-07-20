const columbusUrl =
  "https://api.openweathermap.org/data/2.5/onecall?lat=40.117005&lon=-83.133588&appid=90c455cc6f86cf3c68ec853f22214662&units=imperial";
const palmyraUrl =
  "https://api.openweathermap.org/data/2.5/onecall?lat=43.038831&lon=-77.237121&appid=90c455cc6f86cf3c68ec853f22214662&units=imperial";
const nauvooUrl =
  "https://api.openweathermap.org/data/2.5/onecall?lat=40.550101&lon=-91.384020&appid=90c455cc6f86cf3c68ec853f22214662&units=imperial";
const batonRougeUrl =
  "https://api.openweathermap.org/data/2.5/onecall?lat=30.361397&lon=-91.109824&appid=90c455cc6f86cf3c68ec853f22214662&units=imperial";

function displayResults(weatherData, city) {
  document.getElementById(`${city}-temp`).textContent =
    weatherData.current.temp.toFixed(0);

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.current.weather[0].icon}.png`;
  const desc = weatherData.current.weather[0].description;
  const bodyDesc = desc.slice(1);
  const slicedDesc = desc.slice(0, 1).toUpperCase();
  const capitalizedDesc = slicedDesc + bodyDesc;
  const humidity = weatherData.current.humidity;
  const temp1 = weatherData.daily[0].temp.day;
  const temp2 = weatherData.daily[1].temp.day;
  const temp3 = weatherData.daily[2].temp.day;

  document.getElementById(`${city}-icon`).setAttribute("src", iconsrc);
  document.getElementById(`${city}-icon`).setAttribute("alt", capitalizedDesc);
  document.getElementById(`${city}-type`).textContent = capitalizedDesc;
  document.getElementById(`${city}-humidity`).textContent = humidity;
  document.getElementById(`${city}-temp-1`).textContent = temp1.toFixed(0);
  document.getElementById(`${city}-temp-2`).textContent = temp2.toFixed(0);
  document.getElementById(`${city}-temp-3`).textContent = temp3.toFixed(0);
}

async function apiFetch(url, city) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log("Data: ", data); // this is for testing the call
      displayResults(data, city);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch(columbusUrl, "columbus");
apiFetch(palmyraUrl, "palmyra");
apiFetch(nauvooUrl, "nauvoo");
apiFetch(batonRougeUrl, "baton-rouge");
