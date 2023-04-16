const idBTN = document.getElementById('idBTN');
const idDisplay = document.getElementById('idDisplay');
const hiddenID = document.getElementById('hiddenID');
const form = document.getElementById('myForm');


idBTN.addEventListener("click", ()=>{
    const id = Math.random().toString(36).substring(2, 10).toUpperCase();
    idDisplay.textContent=id;
    hiddenID.value=id;
});

form.addEventListener("submit", async (event) => {
    console.log("form Submitted");
    event.preventDefault();
const formData = new FormData(form); // get form data
//console.log(JSON.stringify(formData));
const datae = {
  id: formData.get('id'),
  name: formData.get('name'),
}

const response = await fetch('/processitem/del', { // send form data using fetch
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(datae),
}).then((response) => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  console.log('Form submitted successfully');
  form.reset();
}).catch((error) => {
  console.error('Error submitting form:', error);
});

//form.reset();

});

/*
.then((response) => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  console.log('Form submitted successfully');
  form.reset();
})
.catch((error) => {
  console.error('Error submitting form:', error);
});

//form.reset();

});
*/

/*
form.addEventListener("submit", (event) => {
    console.log("form Submitted");
    event.preventDefault();
});
//event.preventDefault();
*/

