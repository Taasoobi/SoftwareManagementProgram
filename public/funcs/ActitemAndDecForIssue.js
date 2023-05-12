async function getAIitems(){
    let getJSON = await fetch('/processactitem/getActJson');
    let parsedData = await getJSON.json();
    return parsedData;
}

async function getDecitems(){
    let getJSON = await fetch('/processdec/getDecJson');
    let parsedData = await getJSON.json();
    return parsedData;
}

const actionItems = await getAIitems();
const decItems = await getDecitems();
const noteBox = document.getElementById('AIBox');
const refDocBox = document.getElementById('DecBox');
let noteBoxList = [];
let refDocList = [];


for(let i = 0; i<actionItems.length; i++){
    console.log(actionItems[i]);
    let notespan = document.createElement('span');
    notespan.innerHTML = actionItems[i].name;
    notespan.className = "notetag";
    noteBox.appendChild(notespan);
}

for(let i = 0; i<decItems.length; i++){
    console.log(decItems[i]);
    let docspan = document.createElement('span');
    docspan.innerHTML = decItems[i].name;
    docspan.className = "doctag";
    refDocBox.appendChild(docspan);
}

const notetags = document.querySelectorAll('.notetag');
const doctags = document.querySelectorAll('.doctag');
const noteInputfromForm = document.getElementById('AINote');
const docInputfromForm = document.getElementById('DecNote');


notetags.forEach(function(tag){
    tag.addEventListener('click', function(event){
      if(event.target.tagName === 'SPAN'){
          const clickedTag = event.target;
          
          if(clickedTag.classList.contains('selected')){
            // If the clicked tag is already selected, remove the "selected" class
            clickedTag.classList.remove('selected');
            
            // Remove the corresponding skill from the skilllist array
            const index = noteBoxList.indexOf(clickedTag.textContent);
            if (index !== -1) {
              noteBoxList.splice(index, 1);
            }
          } else {
            // If the clicked tag is not already selected, add the "selected" class
            clickedTag.classList.add('selected');
            
            // Add the corresponding skill to the skilllist array
            noteBoxList.push(clickedTag.textContent);
          }
          
          noteInputfromForm.value=JSON.stringify(noteBoxList);
          console.log(noteBoxList);
      }
    });
  });

  doctags.forEach(function(tag){
    tag.addEventListener('click', function(event){
      if(event.target.tagName === 'SPAN'){
          const clickedTag = event.target;
          
          if(clickedTag.classList.contains('selected')){
            // If the clicked tag is already selected, remove the "selected" class
            clickedTag.classList.remove('selected');
            
            // Remove the corresponding skill from the skilllist array
            const index = refDocList.indexOf(clickedTag.textContent);
            if (index !== -1) {
              refDocList.splice(index, 1);
            }
          } else {
            // If the clicked tag is not already selected, add the "selected" class
            clickedTag.classList.add('selected');
            
            // Add the corresponding skill to the skilllist array
            refDocList.push(clickedTag.textContent);
          }
          
          docInputfromForm.value=JSON.stringify(refDocList);
          console.log(refDocList);
      }
    });
  });