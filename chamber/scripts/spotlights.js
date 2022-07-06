const requestURL = "https://slclark4.github.io/wdd230/chamber/json/data.json";
const spotlightList = document.querySelector(".spotlights");
const qualifyingMemberships = [];

function randomDisplay() {
  return Math.floor(Math.random() * 6);
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
    });
}

function gatherSpotlights(spotlight) {
  if (
    spotlight.membershipLevel === "gold" ||
    spotlight.membershipLevel === "silver"
  ) {
    qualifyingMemberships.push(spotlight);
  }
}

function displaySpotlights(spotlights) {
  const chosenSpotlights = [];
  for (let i = 0; i < 4; i++) {
    const x = randomDisplay();
    chosenSpotlights.push(spotlights[x]);
  }

  chosenSpotlights.forEach((item) => {
    console.log("Made it to last loop");
    const li = document.createElement("li");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    console.log("Item: ", item);

    h3.textContent = item.event.title;
    p.textContent = item.event.description;

    li.appendChild(h3);
    li.appendChild(p);

    spotlightList.appendChild(li);
  });
}

callFetch(gatherSpotlights);
displaySpotlights(qualifyingMemberships);
