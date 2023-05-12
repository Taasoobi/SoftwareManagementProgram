async function getTableData() {
    try{
    const tableData = await fetch('/processtask/getTaskJson');
    const returnTableData = await tableData.json();
    return returnTableData;
    } catch (error) {
        console.error(error);
    }
}

const TaskData = await getTableData();
const noteBox = document.getElementById('TaskBox');
let noteBoxList = [];
const noteInputfromForm = document.getElementById('taskInput');


for(let i = 0; i<TaskData.length; i++){
    console.log(TaskData[i]);
    let notespan = document.createElement('span');
    notespan.innerHTML = TaskData[i].name;
    notespan.className = "notetag";
    noteBox.appendChild(notespan);
}

const notetags = document.querySelectorAll('.notetag');

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