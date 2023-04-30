// Initialize array to hold chosen requirements
let chosenRequirements = [];

// Add event listeners to each tag in avareqtags div
const avareqtags = document.querySelector('.avareqtags');
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
