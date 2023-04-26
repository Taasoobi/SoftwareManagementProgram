const idBTN = document.getElementById("idBTN");
const idDisplay = document.getElementById("idDisplay");
const hiddenID = document.getElementById("hiddenID");
const form = document.getElementById("myForm");

idBTN.addEventListener("click", () => {
  const id = Math.random().toString(36).substring(2, 10).toUpperCase();
  idDisplay.textContent = id;
  hiddenID.value = id;
});

form.addEventListener("submit", async (event) => {
  console.log("form Submitted: Message from Line 13 of id.js");
  event.preventDefault();
  const formData = new FormData(form); // get form data
  //console.log(JSON.stringify(formData));
  const data = {
    id: formData.get("id"),
    name: formData.get("name"),
    description: formData.get("description"),
    duedate: formData.get("duedate"),
  };

  const response = await fetch("/processDeliverable/del", {
    // send form data using fetch
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      console.log("Form submitted successfully: Message From Fetch API function");
      form.reset();
      idDisplay.textContent = "";
      hiddenID.value = "";
    })
    .catch((error) => {
      console.error("Error submitting form:", error);
    });
});
