const requestURL = "https://slclark4.github.io/wdd230/temple/json/temples.json";
const templeSection = document.getElementById("templeInformation");

function callFetch() {
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      console.table(jsonObject); // temporary checking for valid response and data parsing
      const temples = jsonObject["temples"];
      displayTemples(temples, "columbus");
      displayTemples(temples, "palmyra");
      displayTemples(temples, "nauvoo");
      displayTemples(temples, "baton-rouge");
    });
}

function displayTemples(data, city) {
  const cityObject = data[city];
  console.log(cityObject);
  const phoneNumber = cityObject.phone;
  const address = cityObject.address;
  const email = cityObject.email;
  const img = cityObject.img;
  const services = cityObject.services;
  const ordinances = cityObject.ordinanceSchedule;
  const sessions = cityObject.sessionSchedule;
  const closures = cityObject.templeClosureSchedule;

  document.getElementById(`${city}-phone`).textContent;
  document.getElementById(`${city}-email`).textContent;
  document.getElementById(`${city}-address`).textContent;
  document.getElementById(`${city}-img`).textContent;
  const servicesList = document.getElementById(`${city}-services`);

  services.forEach(service, () => {
    const li = document.createElement("li").textContent;
    servicesList.appendChild(li);
  });
}
