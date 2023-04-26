const idDisplay = document.getElementById("idDisplay");
const hiddenID = document.getElementById("hiddenID");
const formtype = document.getElementById('formtype');
const form = document.getElementById("myForm");
let fetchinput ="";






form.addEventListener("submit", async (event) => {
  console.log("form Submitted: Message from Line 13 of id.js");
  event.preventDefault();

    switch(formtype.value){
        case 1:
            fetchinput = "/processDeliverable/del";
        break;
        case 2:
            fetchinput = "/processtask/task";
        break;
        case 3:
            fetchinput = "/processactitem/actitem";
        break;
        case 4:
            fetchinput = "/processiss/iss";
        break;
        case 5:
            fetchinput = "/processreso/reso";
        break;
        case 6:
            fetchinput = "/processdec/dec";
        break;
    };

    console.log(`This is whats inside the fetchinput: ${fetchinput}`);

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
  
