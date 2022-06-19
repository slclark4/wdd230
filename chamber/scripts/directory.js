const requestURL = "https://slclark4.github.io/wdd230/chamber/json/data.json";
const cards = document.querySelector(".cards");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const businesses = jsonObject["businesses"];
    businesses.forEach(displayBusinesses);
  });

function displayBusinesses(business) {
  let card = document.createElement("section");
  let h3 = document.createElement("h3");
  let address = document.createElement("p");
  let phone = document.createElement("p");
  let website = document.createElement("a");

  h3.textContent = business.name;
  address.textContent = business.address;
  phone.textContent = business.phoneNumber;
  website.textContent = business.website;
  website.setAttribute("href", business.website);

  if (business.website.toLowerCase() === "no website") {
    website.removeAttribute("href");
  }

  card.appendChild(h3);
  card.appendChild(address);
  card.appendChild(phone);
  card.appendChild(website);

  document.querySelector("div.cards").appendChild(card);
}
