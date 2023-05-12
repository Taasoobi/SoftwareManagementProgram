
async function getIssueData() {
    try{
    const tableData = await fetch('/processiss/getIssJson');
    const returnTableData = await tableData.json();
    console.log("Issue Function Called");
    return returnTableData;
    } catch (error) {
        console.error(error);
    }
}

async function getTaskData() {
    try{
    const tableData = await fetch('/processtask/getTaskJson');
    const returnTableData = await tableData.json();
    console.log('Task Function Called');
    return returnTableData;
    } catch (error) {
        console.error(error);
    }
}

//console.log("Start of Consts");

const PredTask = await getTaskData();
const SuccTask = await getTaskData();
const IssueData = await getIssueData();

const predTaskBox = document.getElementById('PredTaskBox');
const succTaskBox = document.getElementById('SuccTaskBox');
const issueBox = document.getElementById('IssueBox');

let predTaskArr = [];
let succTaskArr = [];
let issueArr = [];
//console.log(PredTask);
//console.log(SuccTask);
//console.log(IssueData);
//console.log("End of Consts");


for(let i = 0; i<PredTask.length; i++){
    console.log(PredTask[i]);
    let notespan = document.createElement('span');
    notespan.innerHTML = PredTask[i].name;
    notespan.className = "predTask";
    predTaskBox.appendChild(notespan);
}

for(let i = 0; i<SuccTask.length; i++){
    console.log(SuccTask[i]);
    let docspan = document.createElement('span');
    docspan.innerHTML = SuccTask[i].name;
    docspan.className = "succTask";
    succTaskBox.appendChild(docspan);
}

for(let i = 0; i<IssueData.length; i++){
    console.log(IssueData[i]);
    let notespan = document.createElement('span');
    notespan.innerHTML = IssueData[i].name;
    notespan.className = "notetag";
    issueBox.appendChild(notespan);
}


const issuetags = document.querySelectorAll('.notetag');
const succTasktags = document.querySelectorAll('.succTask');
const predTasktags = document.querySelectorAll('.predTask');

const succTaskInputfromForm = document.getElementById('succTaskInput');
const predTaskInputfromForm = document.getElementById('predTaskInput');
const issueInputfromForm = document.getElementById('issueInput');


issuetags.forEach(function(tag){
    tag.addEventListener('click', function(event){
      if(event.target.tagName === 'SPAN'){
          const clickedTag = event.target;
          
          if(clickedTag.classList.contains('selected')){
            // If the clicked tag is already selected, remove the "selected" class
            clickedTag.classList.remove('selected');
            
            // Remove the corresponding skill from the skilllist array
            const index = issueArr.indexOf(clickedTag.textContent);
            if (index !== -1) {
              issueArr.splice(index, 1);
            }
          } else {
            // If the clicked tag is not already selected, add the "selected" class
            clickedTag.classList.add('selected');
            
            // Add the corresponding skill to the skilllist array
            issueArr.push(clickedTag.textContent);
          }
          
          issueInputfromForm.value=JSON.stringify(issueArr);
          console.log(issueArr);
      }
    });
  });

  succTasktags.forEach(function(tag){
    tag.addEventListener('click', function(event){
      if(event.target.tagName === 'SPAN'){
          const clickedTag = event.target;
          
          if(clickedTag.classList.contains('selected')){
            // If the clicked tag is already selected, remove the "selected" class
            clickedTag.classList.remove('selected');
            
            // Remove the corresponding skill from the skilllist array
            const index = succTaskArr.indexOf(clickedTag.textContent);
            if (index !== -1) {
              succTaskArr.splice(index, 1);
            }
          } else {
            // If the clicked tag is not already selected, add the "selected" class
            clickedTag.classList.add('selected');
            
            // Add the corresponding skill to the skilllist array
            succTaskArr.push(clickedTag.textContent);
          }
          
          succTaskInputfromForm.value=JSON.stringify(succTaskArr);
          console.log(succTaskArr);
      }
    });
  });

  predTasktags.forEach(function(tag){
    tag.addEventListener('click', function(event){
      if(event.target.tagName === 'SPAN'){
          const clickedTag = event.target;
          
          if(clickedTag.classList.contains('selected')){
            // If the clicked tag is already selected, remove the "selected" class
            clickedTag.classList.remove('selected');
            
            // Remove the corresponding skill from the skilllist array
            const index = predTaskArr.indexOf(clickedTag.textContent);
            if (index !== -1) {
              predTaskArr.splice(index, 1);
            }
          } else {
            // If the clicked tag is not already selected, add the "selected" class
            clickedTag.classList.add('selected');
            
            // Add the corresponding skill to the skilllist array
            predTaskArr.push(clickedTag.textContent);
          }
          
          predTaskInputfromForm.value=JSON.stringify(predTaskArr);
          console.log(predTaskArr);
      }
    });
  });