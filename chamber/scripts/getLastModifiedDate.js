const lastModified = new Date(document.lastModified).toLocaleString("en-US", {
  hour12: true,
});

document.getElementById("lastModified").textContent = lastModified;
