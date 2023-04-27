
idBTN.addEventListener("click", () => {
  const idBTN = document.getElementById("idBTN");
  const idDisplay = document.getElementById("idDisplay");
  const hiddenID = document.getElementById("hiddenID");
  const id = Math.random().toString(36).substring(2, 10).toUpperCase();
  idDisplay.textContent = id;
  hiddenID.value = id;
});


