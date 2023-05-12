let skilllist = [];

async function getSkillsJson(){
    const skillFetch = await fetch('/retrieveSkills')
    const parsedSkill = await skillFetch.json();
    return parsedSkill;
}

const theSkills = await getSkillsJson();

const skillBox = document.getElementById('skillBox');

for(let i = 0; i<theSkills.length; i++){
    console.log(theSkills[i]);
    let skillspanitem = document.createElement('span');
    skillspanitem.innerHTML = theSkills[i];
    skillspanitem.className = "reqtag";
    skillBox.appendChild(skillspanitem);
}

const skilltags = document.querySelectorAll(".reqtag");
//let skilllist = [];
let skillInputfromForm = document.getElementById('skillsList'); 

skilltags.forEach(function(tag){
    tag.addEventListener('click', function(event){
      if(event.target.tagName === 'SPAN'){
          const clickedTag = event.target;
          
          if(clickedTag.classList.contains('selected')){
            // If the clicked tag is already selected, remove the "selected" class
            clickedTag.classList.remove('selected');
            
            // Remove the corresponding skill from the skilllist array
            const index = skilllist.indexOf(clickedTag.textContent);
            if (index !== -1) {
              skilllist.splice(index, 1);
            }
          } else {
            // If the clicked tag is not already selected, add the "selected" class
            clickedTag.classList.add('selected');
            
            // Add the corresponding skill to the skilllist array
            skilllist.push(clickedTag.textContent);
          }
          
          skillInputfromForm.value=JSON.stringify(skilllist);
          console.log(skilllist);
      }
    });
  });

/*
  // Add event listener to form submit button
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  // Add requirements array to form data
  const skillsInput = document.createElement('input');
  skillsInput.type = 'hidden';
  skillsInput.name = 'skills';
  skillsInput.value = JSON.stringify(skilllist);
  //form.appendChild(skillsInput); // Append the skillsInput element instead of skilllist
  form.insertBefore(skillsInput, form.firstChild);
});
*/
  /*
// Add event listener to form submit button
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  // Add requirements array to form data
  const skillsInput = document.createElement('input');
  skillsInput.type = 'hidden';
  skillsInput.name = 'skills';
  skillsInput.value = JSON.stringify(skilllist);
  console.log(skilllist);
  form.appendChild(skillsInput);
});
*/