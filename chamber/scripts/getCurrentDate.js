const date = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const today = date.toLocaleDateString("en-us", options);

document.getElementById("currentDate").textContent = today;
