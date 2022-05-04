const todaysDate = new Date(document.lastModified).toLocaleString("en-US", {
  hour12: true,
});

document.getElementById("homeLatestUpdate").textContent = todaysDate;
