const dayVisited = new Date();

let numVisits = Number(window.localStorage.getItem("visits-ls"));
let lastDayVisited = localStorage.getItem("lastDayVisited");

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const today = dayVisited.toLocaleDateString("en-uk", options);

if (numVisits == false) {
  localStorage.setItem("visits-ls", "0");
} else {
  numVisits++;
}

if (lastDayVisited == false) {
  localStorage.setItem("lastDayVisited", "0");
} else {
  localStorage.setItem("lastDayVisited", today);
}
