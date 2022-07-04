const spotlightList = document.querySelector(".spotlights");

function displaySpotlights(spotlight) {
  const li = document.createElement("li");
  const h3 = document.createElement("li");
  const p = document.createElement("p");

  h3.textContent = spotlight.event.title;
  p.textContent = spotlight.event.description;

  li.appendChild(h3);
  li.appendChild(p);

  spotlightList.appendChild(li);
}

callFetch(displaySpotlights);
