function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("open");
  document.getElementById("menuButton").classList.toggle("open");
  document.getElementById("bookButton").classList.toggle("open");
}

const x = document.getElementById("menuButton");
x.onclick = toggleMenu;
