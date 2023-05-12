
async function getMeetNote(){
    let getJSON = await fetch('/retrieveMeetNote');
    let parsedData = await getJSON.json();
    return parsedData;
}

async function getRefDoc(){
    let getJSON = await fetch('/retrieveRefDocs');
    let parsedData = await getJSON.json();
    return parsedData;
}

const MeetNotes = await getMeetNote();
const RefDocs = await getRefDoc();
const noteBox = document.getElementById('NoteBox');
const refDocBox = document.getElementById('RefDocBox');
let noteBoxList = [];
let refDocList = [];


for(let i = 0; i<MeetNotes.length; i++){
    console.log(MeetNotes[i]);
    let notespan = document.createElement('span');
    notespan.innerHTML = MeetNotes[i];
    notespan.className = "reqtag";
    noteBox.appendChild(notespan);
}

for(let i = 0; i<RefDocs.length; i++){
    console.log(RefDocs[i]);
    let docspan = document.createElement('span');
    docspan.innerHTML = RefDocs[i];
    docspan.className = "doctag";
    refDocBox.appendChild(docspan);
}

const notetags = document.querySelectorAll('.reqtag');
const doctags = document.querySelectorAll('.doctag');
const noteInputfromForm = document.getElementById('meetNote');
const docInputfromForm = document.getElementById('refNote');


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

