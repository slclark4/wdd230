function readMore(city) {
  document.getElementById(`${city}-button`).addEventListener("click", () => {
    document.getElementById(`${city}-card`).classList.toggle("open");
    if (document.getElementById(`${city}-button`).textContent === "Read More") {
      document.getElementById(`${city}-button`).textContent = "Less";
    } else {
      document.getElementById(`${city}-button`).textContent = "Read More";
    }
  });
}

readMore("columbus");
readMore("palmyra");
readMore("nauvoo");
readMore("baton-rouge");
