
const avareqtags = document.querySelector('.avareqtags');
//let chosenRequirements = [];
console.log("loadreq Commenced");



async function fetchRequirements() {
  try {
    const response = await fetch('/retrieveData');
    const parsedData = await response.json();
    console.log("Here is parsed Data: ");
    console.log(parsedData);
    /*for (let i = 0; i < parsedData.length; i++) {
      console.log(`Here is parsed item number ${i}: ` + parsedData[i]);
    }
     console.log("End of Fetch");*/
        return parsedData;
     } catch (error) {
      console.error(error);
    }
}







// Initialize array to hold chosen requirements
let chosenRequirements = [];

// Add event listeners to each tag in avareqtags div
/*
for(let i = 0; i<parsedData.length; i++){
  const newtagfromJSON = document.createElement('span');
  newtagfromJSON.className = 'reqtag';
  newtagfromJSON.innerHTML = parsedData[i];
  avareqtags.appendChild(newtagfromJSON);
}
*/
avareqtags.addEventListener('click', function(event) {
  if (event.target.tagName === 'SPAN') {
    // Remove clicked tag from avareqtags div
    const clickedTag = event.target;
    clickedTag.parentNode.removeChild(clickedTag);
    
    // Create new tag in chosreqtags div
    const chosreqtags = document.querySelector('.chosreqtags');
    const newTag = document.createElement('span');
    newTag.className = 'reqtag';
    newTag.innerHTML = clickedTag.innerHTML;
    
    // Add event listener to new tag for removal
    newTag.addEventListener('click', function(event) {
      // Remove clicked tag from chosreqtags div
      const clickedTag = event.target;
      clickedTag.parentNode.removeChild(clickedTag);
      
      // Extract text content from clicked tag
      const textContent = clickedTag.textContent.trim().replace(/\s*\+\s*$/, '');
      
      // Create new tag in avareqtags div
      const newTag = document.createElement('span');
      newTag.className = 'reqtag';
      newTag.innerHTML = textContent;
      avareqtags.appendChild(newTag);
      
      // Remove requirement from chosenRequirements array
      const requirementIndex = chosenRequirements.indexOf(textContent);
      if (requirementIndex !== -1) {
        chosenRequirements.splice(requirementIndex, 1);
      }
    });
    
    // Add new tag to chosreqtags div
    chosreqtags.appendChild(newTag);
    
    // Add requirement to chosenRequirements array
    chosenRequirements.push(clickedTag.textContent.trim().replace(/\s*\+\s*$/, ''));
  }
});


// Add event listener to form submit button
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  // Add requirements array to form data
  const requirementsInput = document.createElement('input');
  requirementsInput.type = 'hidden';
  requirementsInput.name = 'requirements';
  requirementsInput.value = JSON.stringify(chosenRequirements);
  form.appendChild(requirementsInput);
});


const parsedData = await fetchRequirements();
console.log("Part 2: Here is parsed Data: ");
console.log(parsedData[2].reqname);
for(let i = 0; i<parsedData.length; i++){
  console.log(`Here is reqitem from ${i}: ${parsedData[i].reqname} `);
  let reqspanitem = document.createElement('span');
  reqspanitem.innerHTML = parsedData[i].reqname;
  reqspanitem.className = "reqtag";
  avareqtags.appendChild(reqspanitem);
}
console.log("End of Fetch");