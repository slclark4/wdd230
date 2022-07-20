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
  const phoneNumber = cityObject.phone;
  const address = cityObject.address;
  const email = cityObject.email;
  const img = cityObject.img;
  const services = cityObject.services;
  const ordinances = cityObject.ordinanceSchedule;
  const sessions = cityObject.sessionSchedule;
  const closures = cityObject.templeClosureSchedule;

  document.getElementById(`${city}-phone`).textContent = phoneNumber;
  document.getElementById(`${city}-email`).textContent = email;
  document.getElementById(`${city}-address`).textContent = address;
  document.getElementById(`${city}-img`).textContent = img;
  const servicesList = document.getElementById(`${city}-services`);
  const ordinancesList = document.getElementById(`${city}-ordinances`);
  const sessionsList = document.getElementById(`${city}-sessions`);
  const closuresList = document.getElementById(`${city}-closures`);

  if (services === "N/A") {
    const p = document.createElement("p");
    p.textContent = "N/A";
    servicesList.appendChild(p);
  } else {
    services.forEach((service) => {
      const li = document.createElement("li");
      li.textContent = service;
      servicesList.appendChild(li);
    });
  }
  if (ordinances === "N/A") {
    const p = document.createElement("p");
    p.textContent = "N/A";
    ordinancesList.appendChild(p);
  } else {
    const baptisms = document.createElement("ul");
    const initiatories = document.createElement("ul");
    const sealings = document.createElement("ul");

    ordinances["baptisms"].forEach((service) => {
      const li = document.createElement("li");
      li.textContent = service;
      baptisms.appendChild(li);
    });
    ordinances["initiatories"].forEach((service) => {
      const li = document.createElement("li");
      li.textContent = service;
      initiatories.appendChild(li);
    });
    ordinances["sealings"].forEach((service) => {
      const li = document.createElement("li");
      li.textContent = service;
      sealings.appendChild(li);
    });

    ordinancesList.appendChild(baptisms);
    ordinancesList.appendChild(initiatories);
    ordinancesList.appendChild(sealings);
  }
  if (sessions === "N/A") {
    const p = document.createElement("p");
    p.textContent = "N/A";
    sessionsList.appendChild(p);
  } else {
    sessions.forEach((service) => {
      const li = document.createElement("li");
      li.textContent = service;
      sessionsList.appendChild(li);
    });
  }
  if (closures === "N/A") {
    const p = document.createElement("p");
    p.textContent = "Currently Closed for Renovations";
    closuresList.appendChild(p);
  } else {
    console.log("Closures: ", closures);
    closures.forEach((service) => {
      const li = document.createElement("li");
      li.textContent = service;
      closuresList.appendChild(li);
    });
  }
}

callFetch();
