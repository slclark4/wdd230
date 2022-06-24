const gridIcon = document.getElementById("grid-display");
const listIcon = document.getElementById("list-display");
const directoryGrid = document.querySelector(".cards");
const directoryList = document.querySelector(".directory-list");

gridIcon.addEventListener("click", () => {
  directoryGrid.style.display = "grid";
  gridIcon.style.border = "2px solid #336699;";
  gridIcon.style.background = "#ffd485";
  listIcon.style.background = "transparent";
  listIcon.style.border = "none";
  directoryList.style.display = "none";
});

listIcon.addEventListener("click", () => {
  directoryList.style.display = "block";
  listIcon.style.border = "2px solid #336699;";
  listIcon.style.background = "#ffd485";
  gridIcon.style.background = "transparent";
  gridIcon.style.border = "none";
  directoryGrid.style.display = "none";
});
