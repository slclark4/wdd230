const requestURL = "https://slclark4.github.io/wdd230/chamber/json/data.json";
const cards = document.querySelector(".cards");
const listItems = document.querySelector(".directory-list");

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
function displayCardBusinesses(business) {
  let card = document.createElement("section");
  let h2 = document.createElement("h2");
  let address = document.createElement("p");
  let phone = document.createElement("p");
  let website = document.createElement("a");

  h2.textContent = business.name;
  address.textContent = business.address;
  phone.textContent = business.phoneNumber;
  website.textContent = business.website;
  website.setAttribute("href", business.website);

  if (business.website.toLowerCase() === "no website") {
    website.removeAttribute("href");
  }

  card.appendChild(h2);
  card.appendChild(address);
  card.appendChild(phone);
  card.appendChild(website);

  document.querySelector("div.cards").appendChild(card);
}

function displayListBusinesses(business) {
  let list = document.getElementById("businessList");
  let groupDiv = document.createElement("div");
  let li = document.createElement("li");
  let h2 = document.createElement("h2");
  let address = document.createElement("p");
  let phone = document.createElement("p");
  let website = document.createElement("a");
  let membershipLevel = document.createElement("p");

  h2.textContent = business.name;
  address.textContent = business.address;
  phone.textContent = business.phoneNumber;
  website.textContent = business.website;
  membershipLevel.textContent = business.membershipLevel;
  website.setAttribute("href", business.website);
  website.setAttribute("target", "_blank");

  if (business.website.toLowerCase() === "no website") {
    website.removeAttribute("href");
    website.removeAttribute("target");
  }

  li.appendChild(h2);
  groupDiv.appendChild(address);
  groupDiv.appendChild(phone);
  groupDiv.appendChild(website);
  groupDiv.appendChild(membershipLevel);
  li.appendChild(groupDiv);
  list.appendChild(li);

  document.querySelector("div.directory-list").appendChild(list);
}

callFetch(displayCardBusinesses);
callFetch(displayListBusinesses);
