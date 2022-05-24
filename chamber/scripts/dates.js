const date = new Date();
const lastModified = new Date(document.lastModified).toLocaleString("en-US", {
  hour12: true,
});
const currentYear = date.getFullYear();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const today = date.toLocaleDateString("en-uk", options);

const day = date.getDay();
if (day === 1 || day === 2) {
  document.getElementById("banner").style.display = "block";
}

document.querySelector("#currentYear").textContent = currentYear;
document.getElementById("lastModified").textContent = lastModified;
document.getElementById("currentDate").textContent = today;
