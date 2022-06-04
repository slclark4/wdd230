const dayVisited = date.now();
let numVisits = Number(window.localStorage.getItem("visits-ls"));
let lastDayVisited = localStorage.getItem("lastDayVisited");

if (numVisits == false) {
  localStorage.setItem("visits-ls", "0");
} else {
  numVisits++;
}

if (lastDayVisited == false) {
  localStorage.setItem("lastDayVisited", "0");
} else {
  localStorage["lastDayVisited"] = dayVisited;
}

console.log(lastDayVisited);
