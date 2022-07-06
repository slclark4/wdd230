const spotlightList = document.querySelector(".spotlights");

function randomDisplay() {
  return Math.floor(Math.random() * 9);
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
  const qualifyingMemberships = {};
  if (
    spotlight.membershipLevel === "gold" ||
    spotlight.membershipLevel === "silver"
  ) {
    qualifyingMemberships.append(spotlight);
  }

  displaySpotlights(qualifyingMemberships);
}

function displaySpotlights(spotlights) {
  const chosenSpotlights = {};
  for (i === 0; i < 4; i++) {
    const x = randomDisplay();
    chosenSpotlights.append(spotlights[x]);
  }

  for (item in chosenSpotlights) {
    const li = document.createElement("li");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    h3.textContent = item.event.title;
    p.textContent = item.event.description;

    li.appendChild(h3);
    li.appendChild(p);

    spotlightList.appendChild(li);
  }
}

callFetch(gatherSpotlights);
