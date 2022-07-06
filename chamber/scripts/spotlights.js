const requestURL = "https://slclark4.github.io/wdd230/chamber/json/data.json";
const spotlightList = document.querySelector(".spotlights");
// let businessList = [];
const qualifyingMemberships = [];

function randomDisplay() {
  console.log("Array Length: ", qualifyingMemberships.length);
  return Math.floor(Math.random() * qualifyingMemberships.length);
}

function callFetch(displayType) {
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      console.table(jsonObject); // temporary checking for valid response and data parsing
      const businesses = jsonObject["businesses"];
      businesses.forEach(displayType);
      displaySpotlights();
    });
}

// async function callFetch() {
//   const response = await fetch(requestURL);
//   businessList = await response.json();
//   gatherSpotlights();
//   displaySpotlights();
// }

function gatherSpotlights(spotlight) {
  // businessList.forEach((spotlight) => {
  if (
    spotlight.membershipLevel === "gold" ||
    spotlight.membershipLevel === "silver"
  ) {
    qualifyingMemberships.push(spotlight);
    console.log("Qualifying Memberships: ", qualifyingMemberships);
  }
  // });
}

function displaySpotlights() {
  const chosenSpotlights = [];
  while (chosenSpotlights.length < 4) {
    const x = randomDisplay();
    if (!chosenSpotlights.includes(qualifyingMemberships[x])) {
      chosenSpotlights.push(qualifyingMemberships[x]);
    }
  }

  chosenSpotlights.forEach((item) => {
    const li = document.createElement("li");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const infoContainer = document.createElement("div");
    const address = document.createElement("a");
    const phone = document.createElement("a");

    console.log("Item: ", item);

    h3.textContent = item.event.title;
    p.textContent = `"${item.event.description}"`;
    address.textContent = item.address;
    phone.textContent = item.phoneNumber;

    infoContainer.appendChild(phone);
    infoContainer.appendChild(address);

    li.appendChild(h3);
    li.appendChild(p);
    li.appendChild(infoContainer);

    spotlightList.appendChild(li);
  });
}

callFetch(gatherSpotlights);
