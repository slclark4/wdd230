const dayVisited = new Date();

let lastDayVisited;
let timeDifference;

if (!lastDayVisited) {
  localStorage.setItem("lastDayVisited", dayVisited);
} else {
  lastDayVisited = localStorage.getItem("lastDayVisited");
  localStorage.setItem("lastDayVisited", dayVisited);
  timeDifference = difference(lastDayVisited, dayVisited);
}

// I found this function online when researching an appropriate way to get the date difference.
// I wasn't looking for a function, just an explanation but I researched it and I understand it.
function difference(date1, date2) {
  const date1utc = Date.UTC(
    date1.getFullYear(),
    date1.getMonth(),
    date1.getDate()
  );
  const date2utc = Date.UTC(
    date2.getFullYear(),
    date2.getMonth(),
    date2.getDate()
  );
  const day = 1000 * 60 * 60 * 24;
  return (date2utc - date1utc) / day;
}

if (!timeDifference) {
  timeDifference = 0;
  document.getElementById("numDaysLastVisit").textContent =
    "- Today is your first visit!";
} else {
  document.getElementById("numDaysLastVisit").textContent = timeDifference;
}

localStorage.setItem("numberOfDaysSinceLastVisit", timeDifference);
