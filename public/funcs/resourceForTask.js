async function getTableData() {
    try{
    const tableData = await fetch('/processreso/getResJson');
    const returnTableData = await tableData.json();
    return returnTableData;
    } catch (error) {
        console.error(error);
    }
}

const resourceList = await getTableData();
const resourceBox = document.getElementById('ResourceBox');
const resourceInputFromForm = document.getElementById('resourceInput');
let resourceArr = [];

for(let i = 0; i<resourceList.length; i++){
    console.log(resourceList[i]);
    let resourcespanitem = document.createElement('span');
    resourcespanitem.innerHTML = resourceList[i].name;
    resourcespanitem.className = "reqtag";
    resourceBox.appendChild(resourcespanitem);
}

const resotags = document.querySelectorAll('.reqtag');

resotags.forEach(function(tag){
    tag.addEventListener('click', function(event){
      if(event.target.tagName === 'SPAN'){
          const clickedTag = event.target;
          
          if(clickedTag.classList.contains('selected')){
            // If the clicked tag is already selected, remove the "selected" class
            clickedTag.classList.remove('selected');
            
            // Remove the corresponding skill from the skilllist array
            const index = resourceArr.indexOf(clickedTag.textContent);
            if (index !== -1) {
              resourceArr.splice(index, 1);
            }
          } else {
            // If the clicked tag is not already selected, add the "selected" class
            clickedTag.classList.add('selected');
            
            // Add the corresponding skill to the skilllist array
            resourceArr.push(clickedTag.textContent);
          }
          
          resourceInputFromForm.value=JSON.stringify(resourceArr);
          console.log(resourceArr);
      }
    });
  });
