document.getElementById("submitButton").addEventListener("click", function () {
  const inputValue = document.getElementById("favchap").value;
  const li = document.createElement("li");
  const deleteButton = document.createElement("button");

  console.log("Input: ", inputValue);

  li.textContent = inputValue;
  deleteButton.textContent = "Delete";

  document.getElementById("list").appendChild(li);
  document.getElementById("list").appendChild(deleteButton);

  deleteButton.addEventListener("click", function () {
    document.getElementById("list").removeChild(li);
    document.getElementById("list").removeChild(deleteButton);

    const inputElement = document.getElementById("favchap");
    inputElement.focus();
  });

  const inputElement = document.getElementById("favchap");
  inputElement.value = "";
  inputElement.focus();
});
